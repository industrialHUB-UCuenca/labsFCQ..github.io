const curriculumMetrics = document.querySelector("#curriculumMetrics");
const courseSearch = document.querySelector("#courseSearch");
const courseLevel = document.querySelector("#courseLevel");
const courseItinerary = document.querySelector("#courseItinerary");
const courseGrid = document.querySelector("#courseGrid");
const courseDetail = document.querySelector("#courseDetail");
const courseNetwork = document.querySelector("#courseNetwork");

const params = new URLSearchParams(window.location.search);
let selectedCourseCode = params.get("course") ?? iqCurriculum[0]?.legacyCode;

function htmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function courseByLegacy(code) {
  return iqCurriculum.find((course) => course.legacyCode === code);
}

function courseByAcademic(code) {
  return iqCurriculum.find((course) => course.code === code);
}

function requirementsFor(course) {
  const text = course?.requirements ?? "";
  const pr = text.match(/PR:\s*(.*?)(?:\s+CR:|$)/i)?.[1]?.trim() ?? "";
  const cr = text.match(/CR:\s*(.*)$/i)?.[1]?.trim() ?? "";
  return { pr, cr };
}

function renderCurriculumMetrics() {
  const links = iqCurriculum.reduce((sum, course) => sum + course.prerequisiteCodes.length, 0);
  const hours = iqCurriculum.reduce((sum, course) => sum + (Number(course.hours) || 0), 0);
  curriculumMetrics.innerHTML = [
    [iqCurriculum.length, "asignaturas e itinerarios"],
    [new Set(iqCurriculum.map((course) => course.level)).size, "niveles"],
    [links, "encadenamientos"],
    [hours.toLocaleString("es-EC"), "horas registradas"],
  ]
    .map(([value, label]) => `<article><strong>${htmlEscape(value)}</strong><span>${label}</span></article>`)
    .join("");
}

function setupCourseFilters() {
  const levels = [...new Set(iqCurriculum.map((course) => course.level).filter(Boolean))].sort((a, b) => a - b);
  const itineraries = [...new Set(iqCurriculum.map((course) => course.itinerary).filter(Boolean))].sort();
  courseLevel.innerHTML = `<option value="Todos">Todos</option>${levels.map((level) => `<option value="${level}">Nivel ${level}</option>`).join("")}`;
  courseItinerary.innerHTML = `<option value="Todos">Todos</option><option value="">Sin itinerario</option>${itineraries.map((item) => `<option value="${htmlEscape(item)}">${htmlEscape(item)}</option>`).join("")}`;
}

function filteredCourses() {
  const query = courseSearch.value.trim().toLowerCase();
  const level = courseLevel.value;
  const itinerary = courseItinerary.value;
  return iqCurriculum.filter((course) => {
    const text = [course.legacyCode, course.code, course.name, course.requirements, course.teachers.join(" ")].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesLevel = level === "Todos" || String(course.level) === level;
    const matchesItinerary = itinerary === "Todos" || course.itinerary === itinerary;
    return matchesQuery && matchesLevel && matchesItinerary;
  });
}

function renderCourseGrid() {
  const courses = filteredCourses();
  if (!courses.some((course) => course.legacyCode === selectedCourseCode)) selectedCourseCode = courses[0]?.legacyCode;
  const groups = courses.reduce((acc, course) => {
    acc[course.level] ??= [];
    acc[course.level].push(course);
    return acc;
  }, {});
  courseGrid.innerHTML = Object.entries(groups)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(
      ([level, levelCourses]) => `
        <section class="course-level">
          <div class="course-level-head">
            <span>${level}</span>
            <h3>Nivel ${level}</h3>
          </div>
          <div class="course-list">
            ${levelCourses
              .map((course) => {
                const selected = course.legacyCode === selectedCourseCode ? "active" : "";
                return `
                  <button class="course-card ${selected}" type="button" data-course="${htmlEscape(course.legacyCode)}">
                    <span>${htmlEscape(course.code)}</span>
                    <strong>${htmlEscape(course.name)}</strong>
                    <small>${course.acd}/${course.ape}/${course.aa} horas · ${course.teachers.length || 0} docentes</small>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderCourseDetail() {
  const course = courseByLegacy(selectedCourseCode);
  if (!course) {
    courseDetail.innerHTML = `<p class="empty-state">Selecciona una asignatura para ver sus relaciones.</p>`;
    return;
  }
  const { pr, cr } = requirementsFor(course);
  courseDetail.innerHTML = `
    <p class="kicker">Asignatura seleccionada</p>
    <h3>${htmlEscape(course.name)}</h3>
    <dl class="course-facts">
      <div><dt>Código malla</dt><dd>${htmlEscape(course.code)}</dd></div>
      <div><dt>Código legado</dt><dd>${htmlEscape(course.legacyCode)}</dd></div>
      <div><dt>Nivel</dt><dd>${course.level}</dd></div>
      <div><dt>Horas</dt><dd>ACD ${course.acd} · APE ${course.ape} · AA ${course.aa} · Total ${course.hours}</dd></div>
    </dl>
    <div class="requirement-block">
      <h4>Prerrequisitos</h4>
      <p>${pr ? htmlEscape(pr) : "Sin prerrequisitos registrados."}</p>
    </div>
    <div class="requirement-block">
      <h4>Correquisitos</h4>
      <p>${cr ? htmlEscape(cr) : "Sin correquisitos registrados."}</p>
    </div>
    <div class="mini-list">
      <h4>Docentes de la oferta</h4>
      ${course.teachers.length ? course.teachers.map((name) => `<a href="iq.html#docentes">${htmlEscape(name)}</a>`).join("") : `<p class="empty-state">Sin docente asociado en Oferta.xlsx.</p>`}
    </div>
  `;
}

function renderNetwork() {
  const course = courseByLegacy(selectedCourseCode);
  if (!course) return;
  const predecessors = course.prerequisiteCodes.map(courseByAcademic).filter(Boolean);
  const dependents = iqCurriculum.filter((item) => item.prerequisiteCodes.includes(course.code));
  const column = (title, list, tone) => `
    <article class="network-column ${tone}">
      <h3>${title}</h3>
      ${list.length ? list.map((item) => `<button type="button" data-course="${htmlEscape(item.legacyCode)}"><strong>${htmlEscape(item.name)}</strong><span>Nivel ${item.level}</span></button>`).join("") : `<p class="empty-state">Sin asignaturas.</p>`}
    </article>
  `;
  courseNetwork.innerHTML = `
    ${column("Predecesoras", predecessors, "before")}
    <article class="network-column current">
      <h3>Seleccionada</h3>
      <button type="button" data-course="${htmlEscape(course.legacyCode)}"><strong>${htmlEscape(course.name)}</strong><span>${htmlEscape(course.code)}</span></button>
    </article>
    ${column("Dependientes", dependents, "after")}
  `;
}

function renderAll() {
  renderCourseGrid();
  renderCourseDetail();
  renderNetwork();
}

courseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course]");
  if (!button) return;
  selectedCourseCode = button.dataset.course;
  renderAll();
});

courseNetwork.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course]");
  if (!button) return;
  selectedCourseCode = button.dataset.course;
  renderAll();
  document.querySelector("#detalle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

[courseSearch, courseLevel, courseItinerary].forEach((control) => control.addEventListener("input", renderAll));

renderCurriculumMetrics();
setupCourseFilters();
renderAll();
