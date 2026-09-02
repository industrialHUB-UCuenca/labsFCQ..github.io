const campusNav = document.querySelector("#campusNav");
const campusSummary = document.querySelector("#campusSummary");
const featuredLabs = document.querySelector("#featuredLabs");

function labUrl(lab) {
  return `lab.html?id=${encodeURIComponent(lab.id)}`;
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
      const count = labs.filter((lab) => lab.campus === campus).length;
      return `
        <article class="campus-card accent-${index + 1}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${campus}</h3>
          <strong>${count}</strong>
          <p>laboratorios registrados</p>
        </article>
      `;
    })
    .join("");
}

function renderFeaturedLabs() {
  featuredLabs.innerHTML = labs
    .slice(0, 6)
    .map(
      (lab) => `
        <a class="lab-tile" href="${labUrl(lab)}">
          <span>${String(lab.number).padStart(2, "0")}</span>
          <h3>${escapeHtml(lab.name)}</h3>
          <p>${lab.campus} / ${escapeHtml(lab.building)}</p>
        </a>
      `,
    )
    .join("");
}

renderCampusNav();
renderCampusSummary();
renderFeaturedLabs();
setupCampusMenuBehavior();
