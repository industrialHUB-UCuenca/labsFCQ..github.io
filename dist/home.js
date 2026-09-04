const campusNav = document.querySelector("#campusNav");
const campusSummary = document.querySelector("#campusSummary");
const campusFilters = document.querySelector("#campusFilters");
const synopticMap = document.querySelector("#synopticMap");
const labPreview = document.querySelector("#labPreview");

let activeCampus = campusOrder[0];
let activeLabId = labs.find((lab) => lab.campus === activeCampus)?.id ?? labs[0]?.id;

function labUrl(lab) {
  return `lab.html?id=${encodeURIComponent(lab.id)}`;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderCampusNav() {
  campusNav.innerHTML = campusOrder
    .map((campus) => {
      const items = labs.filter((lab) => lab.campus === campus);
      return `
        <details class="nav-group">
          <summary>${campus}<span>${items.length}</span></summary>
          <div>
            ${items.map((lab) => `<a href="${labUrl(lab)}">${escapeHtml(lab.shortName)}</a>`).join("")}
          </div>
        </details>
      `;
    })
    .join("");
}

function renderCampusSummary() {
  campusSummary.innerHTML = campusOrder
    .map((campus, index) => {
      const campusLabs = labs.filter((lab) => lab.campus === campus);
      const careers = [...new Set(campusLabs.map((lab) => lab.career))].length;
      return `
        <button class="campus-card accent-${index + 1}" type="button" data-campus="${escapeHtml(campus)}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${campus}</h3>
          <strong>${campusLabs.length}</strong>
          <p>${careers} carreras vinculadas</p>
        </button>
      `;
    })
    .join("");
}

function renderCampusFilters() {
  campusFilters.innerHTML = campusOrder
    .map((campus) => {
      const count = labs.filter((lab) => lab.campus === campus).length;
      const active = campus === activeCampus ? "active" : "";
      return `<button class="${active}" type="button" data-campus="${escapeHtml(campus)}">${campus}<span>${count}</span></button>`;
    })
    .join("");
}

function groupByCareer(campusLabs) {
  return campusLabs.reduce((groups, lab) => {
    const career = lab.career || "Sin carrera definida";
    groups[career] ??= [];
    groups[career].push(lab);
    return groups;
  }, {});
}

function renderSynopticMap() {
  const campusLabs = labs.filter((lab) => lab.campus === activeCampus);
  const groups = groupByCareer(campusLabs);

  synopticMap.innerHTML = Object.entries(groups)
    .map(([career, careerLabs]) => {
      return `
        <section class="career-lane">
          <div class="career-head">
            <span>${careerLabs.length}</span>
            <h3>${escapeHtml(career)}</h3>
          </div>
          <div class="lab-node-list">
            ${careerLabs
              .map((lab) => {
                const selected = lab.id === activeLabId ? "selected" : "";
                return `
                  <button class="lab-node ${selected}" type="button" data-lab-id="${escapeHtml(lab.id)}">
                    <span>${String(lab.number).padStart(2, "0")}</span>
                    <strong>${escapeHtml(lab.shortName)}</strong>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderLabPreview() {
  const lab = labs.find((item) => item.id === activeLabId) ?? labs.find((item) => item.campus === activeCampus);
  if (!lab) return;

  labPreview.innerHTML = `
    <div class="preview-topline">
      <span>${escapeHtml(lab.campus)}</span>
      <span>${escapeHtml(lab.career)}</span>
    </div>
    <h3>${escapeHtml(lab.name)}</h3>
    <p>${escapeHtml(lab.building)}</p>
    <div class="preview-people">
      ${lab.responsible
        .map((person) => {
          const media = person.photo
            ? `<img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" />`
            : `<span class="person-initials small">${escapeHtml(initials(person.name))}</span>`;
          const email = person.email ? `<a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a>` : "";
          return `
            <article>
              ${media}
              <div>
                <strong>${escapeHtml(person.name)}</strong>
                <small>${escapeHtml(person.role)}</small>
                ${email}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
    <a class="button-link" href="${labUrl(lab)}">Abrir ficha del laboratorio</a>
  `;
}

function selectCampus(campus) {
  activeCampus = campus;
  activeLabId = labs.find((lab) => lab.campus === activeCampus)?.id ?? labs[0]?.id;
  renderCampusFilters();
  renderSynopticMap();
  renderLabPreview();
}

function selectLab(labId) {
  activeLabId = labId;
  renderSynopticMap();
  renderLabPreview();
}

campusSummary.addEventListener("click", (event) => {
  const button = event.target.closest("[data-campus]");
  if (button) selectCampus(button.dataset.campus);
});

campusFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-campus]");
  if (button) selectCampus(button.dataset.campus);
});

synopticMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lab-id]");
  if (button) selectLab(button.dataset.labId);
});

renderCampusNav();
renderCampusSummary();
renderCampusFilters();
renderSynopticMap();
renderLabPreview();
setupCampusMenuBehavior();
