const hubMetrics = document.querySelector("#hubMetrics");
const commissionGrid = document.querySelector("#commissionGrid");
const facultySearch = document.querySelector("#facultySearch");
const facultyLevel = document.querySelector("#facultyLevel");
const facultySource = document.querySelector("#facultySource");
const facultyGrid = document.querySelector("#facultyGrid");
const facultyPanel = document.querySelector("#facultyPanel");
const offerRows = document.querySelector("#offerRows");

let selectedFaculty = iqFaculty.find((item) => item.courses.length)?.name ?? iqFaculty[0]?.name;

function iqEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function iqInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function facultyCourses(name) {
  return iqOffer.filter((course) => course.teachers.includes(name));
}

function renderHubMetrics() {
  const assigned = iqOffer.filter((course) => course.teachers.length).length;
  hubMetrics.innerHTML = [
    [iqCommissions.length, "comisiones"],
    [iqFaculty.length, "docentes vinculados"],
    [assigned, "asignaturas con docente"],
    [iqMetadata.period, "período de oferta"],
  ]
    .map(([value, label]) => `<article><strong>${iqEscape(value)}</strong><span>${label}</span></article>`)
    .join("");
}

function renderCommissions() {
  commissionGrid.innerHTML = iqCommissions
    .map(
      (commission) => `
        <article class="commission-card">
          <h3>${iqEscape(commission.name)}</h3>
          <ul>${commission.members.map((member) => `<li>${iqEscape(member)}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function setupFilters() {
  const levels = [...new Set(iqOffer.map((course) => course.level).filter(Boolean))].sort((a, b) => a - b);
  facultyLevel.innerHTML = `<option value="Todos">Todos</option>${levels.map((level) => `<option value="${level}">Nivel ${level}</option>`).join("")}`;
  facultySource.innerHTML = `<option value="Todos">Todos</option><option value="UCuenca">Con foto UCuenca</option><option value="Oferta">Solo oferta/comisiones</option>`;
}

function filteredFaculty() {
  const query = facultySearch.value.trim().toLowerCase();
  const level = facultyLevel.value;
  const source = facultySource.value;
  return iqFaculty.filter((person) => {
    const courses = facultyCourses(person.name);
    const text = [person.name, person.source, ...person.courses, ...person.commissions].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesLevel = level === "Todos" || courses.some((course) => String(course.level) === level);
    const matchesSource = source === "Todos" || person.source === source;
    return matchesQuery && matchesLevel && matchesSource;
  });
}

function renderFacultyGrid() {
  const people = filteredFaculty();
  if (!people.some((person) => person.name === selectedFaculty)) selectedFaculty = people[0]?.name;
  facultyGrid.innerHTML = people
    .map((person) => {
      const selected = person.name === selectedFaculty ? "active" : "";
      const media = person.photo
        ? `<img src="${iqEscape(person.photo)}" alt="${iqEscape(person.name)}" loading="lazy" />`
        : `<span class="faculty-initials">${iqEscape(iqInitials(person.name))}</span>`;
      return `
        <button class="faculty-card ${selected}" type="button" data-faculty="${iqEscape(person.name)}">
          ${media}
          <span>
            <strong>${iqEscape(person.name)}</strong>
            <small>${person.courses.length} asignaturas · ${person.commissions.length} comisiones</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderFacultyPanel() {
  const person = iqFaculty.find((item) => item.name === selectedFaculty);
  if (!person) {
    facultyPanel.innerHTML = `<p class="empty-state">Selecciona un docente para ver su carga.</p>`;
    return;
  }
  const courses = facultyCourses(person.name);
  const media = person.photo
    ? `<img src="${iqEscape(person.photo)}" alt="${iqEscape(person.name)}" />`
    : `<span class="faculty-initials large">${iqEscape(iqInitials(person.name))}</span>`;
  facultyPanel.innerHTML = `
    <div class="faculty-panel-head">
      ${media}
      <div>
        <p class="kicker">Ficha docente</p>
        <h3>${iqEscape(person.name)}</h3>
        <p>${person.photo ? "Foto tomada de la página institucional de Ingeniería Química." : "Docente identificado desde oferta académica o comisiones."}</p>
      </div>
    </div>
    <div class="mini-list">
      <h4>Asignaturas</h4>
      ${courses.length ? courses.map((course) => `<a href="iq-malla.html?course=${encodeURIComponent(course.legacyCode)}">${iqEscape(course.subject)} <span>Nivel ${course.level}</span></a>`).join("") : `<p class="empty-state">Sin asignaturas en la oferta adjunta.</p>`}
    </div>
    <div class="mini-list">
      <h4>Comisiones</h4>
      ${person.commissions.length ? person.commissions.map((item) => `<p>${iqEscape(item)}</p>`).join("") : `<p class="empty-state">Sin comisión registrada en el archivo adjunto.</p>`}
    </div>
  `;
}

function renderOfferRows() {
  offerRows.innerHTML = iqOffer
    .slice()
    .sort((a, b) => a.level - b.level || a.subject.localeCompare(b.subject))
    .map(
      (course) => `
        <tr>
          <td>Nivel ${course.level}</td>
          <td>${iqEscape(course.legacyCode)}</td>
          <td><a href="iq-malla.html?course=${encodeURIComponent(course.legacyCode)}">${iqEscape(course.subject)}</a></td>
          <td>${course.acd}/${course.ape}/${course.aa}</td>
          <td>${course.teachers.length ? course.teachers.map(iqEscape).join(", ") : "Por asignar"}</td>
        </tr>
      `,
    )
    .join("");
}

function renderFaculty() {
  renderFacultyGrid();
  renderFacultyPanel();
}

facultyGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-faculty]");
  if (!button) return;
  selectedFaculty = button.dataset.faculty;
  renderFaculty();
});

[facultySearch, facultyLevel, facultySource].forEach((control) => control.addEventListener("input", renderFaculty));

renderHubMetrics();
renderCommissions();
setupFilters();
renderFaculty();
renderOfferRows();
