const campusNav = document.querySelector("#campusNav");
const page = document.querySelector("#labPage");
const currentId = new URLSearchParams(window.location.search).get("id") || labs[0].id;
const lab = labs.find((item) => item.id === currentId) || labs[0];

function labUrl(item) {
  return `lab.html?id=${encodeURIComponent(item.id)}`;
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderCampusNav() {
  campusNav.innerHTML = campusOrder
    .map((campus) => {
      const items = labs.filter((item) => item.campus === campus);
      return `
        <details class="nav-group">
          <summary>${campus}<span>${items.length}</span></summary>
          <div>
            ${items
              .map((item) => `<a class="${item.id === lab.id ? "active" : ""}" href="${labUrl(item)}">${escapeHtml(item.shortName)}</a>`)
              .join("")}
          </div>
        </details>
      `;
    })
    .join("");
}

function renderLab() {
  const index = labs.findIndex((item) => item.id === lab.id);
  const next = labs[(index + 1) % labs.length];
  const tabs = [
    {
      id: "equipos",
      label: "Equipos de laboratorio",
      title: "Equipos de laboratorio",
      items: lab.equipment,
      note: "Listado inicial de equipos asociados a esta ficha. Puede ampliarse con códigos patrimoniales, estado, ubicación y responsable de uso.",
    },
    {
      id: "practicas",
      label: "Prácticas realizadas",
      title: "Prácticas realizadas",
      items: [
        "Prácticas de docencia planificadas por asignatura",
        "Preparación de muestras y demostraciones académicas",
        "Actividades de investigación o vinculación registradas",
      ],
      note: `Actividad principal reportada en la matriz: ${lab.activity}.`,
    },
    {
      id: "mantenimiento",
      label: "Gestión de mantenimiento",
      title: "Gestión de mantenimiento",
      items: ["Revisión preventiva trimestral", "Registro de intervenciones", "Alertas de calibración", "Verificación de condiciones de operación"],
      note: "Esta pestaña concentra el plan de mantenimiento preventivo y correctivo del laboratorio.",
    },
    {
      id: "seguridad",
      label: "Requisitos de seguridad",
      title: "Requisitos de seguridad",
      items: ["Uso obligatorio de EPP", "Inducción previa al ingreso", "Registro de uso de equipos", "Gestión de residuos según PNT vigente"],
      note: "Los requisitos pueden ajustarse según el tipo de laboratorio, nivel de riesgo y protocolos oficiales.",
    },
  ];

  document.title = `${lab.name} | Laboratorios FCQ`;
  page.innerHTML = `
    <section class="lab-hero">
      <div class="lab-hero-overlay">
        <a class="back-link" href="index.html">Volver al inicio</a>
        <p class="kicker">${lab.campus}</p>
        <h1>${escapeHtml(lab.name)}</h1>
        <p>${escapeHtml(lab.building)} / ${escapeHtml(lab.activity)}</p>
      </div>
    </section>

    <section class="lab-layout">
      <aside class="profile-card">
        <span class="portrait" aria-hidden="true"></span>
        <h2 class="profile-title">Responsables</h2>
        ${lab.responsible
          .map(
            (person) => `
              <div class="person">
                ${
                  person.photo
                    ? `<img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" />`
                    : `<span class="person-initials">${escapeHtml(initials(person.name))}</span>`
                }
                <span>
                  <strong>${escapeHtml(person.name)}</strong>
                  <small>${escapeHtml(person.role)}${person.phone ? ` / ${escapeHtml(person.phone)}` : ""}</small>
                  ${person.email ? `<a class="person-email" href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a>` : ""}
                </span>
              </div>
            `,
          )
          .join("")}
      </aside>

      <div class="lab-content">
        <article class="statement">
          <h2>Descripción general</h2>
          <p>
            Este espacio de ${escapeHtml(lab.activity.toLowerCase())} concentra información operacional para coordinar uso,
            responsables, equipos, insumos, mantenimiento preventivo y planes normalizados de trabajo.
          </p>
        </article>

        <section class="folio" aria-label="Información del laboratorio por pestañas">
          <div class="folio-tabs" role="tablist">
            ${tabs
              .map(
                (tab, tabIndex) => `
                  <button class="folio-tab ${tabIndex === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${tabIndex === 0}" aria-controls="panel-${tab.id}" data-tab="${tab.id}">
                    ${tab.label}
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="folio-panels">
            ${tabs
              .map(
                (tab, tabIndex) => `
                  <article class="folio-panel ${tabIndex === 0 ? "active" : ""}" id="panel-${tab.id}" role="tabpanel" data-panel="${tab.id}">
                    <p class="kicker">${tab.title}</p>
                    <p class="panel-note">${escapeHtml(tab.note)}</p>
                    <ul>${tab.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <nav class="next-lab" aria-label="Siguiente laboratorio">
          <span>Siguiente laboratorio</span>
          <a href="${labUrl(next)}">${escapeHtml(next.name)}</a>
        </nav>
      </div>
    </section>
  `;

  document.querySelectorAll(".folio-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
      document.querySelectorAll(".folio-tab").forEach((tab) => {
        const isActive = tab.dataset.tab === tabId;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      document.querySelectorAll(".folio-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === tabId);
      });
    });
  });
}

renderCampusNav();
renderLab();
setupCampusMenuBehavior();
