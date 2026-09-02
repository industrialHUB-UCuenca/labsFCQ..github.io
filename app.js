const sourceLabs = [
  ["Laboratorio de Microscopia", "Campus Central", "Facultad de Ciencias Quimicas", "Monica Narvaez", "0987224326", "Docencia"],
  ["Laboratorio de Toxicologia Clinica", "Campus Central", "Facultad de Ciencias Quimicas", "Monica Narvaez", "0987224326", "Docencia"],
  ["Laboratorio de Tecnologia Farmaceutica", "Campus Central", "Facultad de Ciencias Quimicas", "Maria Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Analisis Bromatologico", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Maria Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Microbiologia de Alimentos", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Responsable: Jessica Leon; Tecnico docente: Maria Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Botanica", "Campus Central", "Facultad de Ciencias Quimicas", "Maritza Dariana Lamulle Vicuna", "0995076993", "Docencia"],
  ["Laboratorio de Operaciones Unitarias", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Responsable: Jorge Delgado; Tecnico docente: Veronica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Analisis de Suelos", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Jaime Cuenca", "0984929762", "Docencia"],
  ["Laboratorio de Humidificacion", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Veronica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Energia e Ingenieria de la reaccion", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Responsable: Angelica Vele; Tecnico docente: Veronica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Mineralogia", "Campus Central", "Facultad de Ciencias Quimicas", "Christian Cruzat", "0983945653", "Docencia"],
  ["Laboratorio de Termodinamica y Fisicoquimica", "Campus Central", "Tecnologico Facultad de Ciencias Quimicas", "Alexandra Criollo", "0995776576", "Docencia"],
  ["Laboratorio de Quimica", "Campus Central", "Facultad de Ciencias Quimicas", "Israel Astudillo", "0983336244", "Docencia"],
  ["Laboratorio de Quimica Organica", "Campus Central", "Facultad de Ciencias Quimicas", "Fabricio Riera", "", "Docencia"],
  ["Laboratorio de Analisis Cuantitativo", "Campus Central", "Facultad de Ciencias Quimicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Fabricacion Digital-Industrial FABLAB (Ingenieria Industrial)", "Balzay", "Bloque C", "Responsable: Noe Rodrigo Guaman G.; Tecnico docente: Jenny Maritza Rojas Q.", "0995638810", "Docencia"],
  ["Laboratorio de Manufactura Flexible (Ingenieria Industrial)", "Balzay", "Bloque C", "Responsable: Noe Rodrigo Guaman G.; Tecnico docente: Fernando Cajamarca Guamabana", "0995638810", "Docencia"],
  ["Laboratorio de Industria 4.0 (Ingenieria Industrial)", "Balzay", "Bloque C", "Responsable: Noe Rodrigo Guaman G.; Tecnico docente: Jenny Maritza Rojas Q.", "0995638810", "Docencia"],
  ["Laboratorio de maquinas herramientas (Ingenieria Industrial)", "Tecnologico", "Tecnologico Facultad de Ciencias Quimicas", "Responsable: Manuel Raul Pelaez Samaniego", "0990791031", "Docencia"],
  ["Laboratorio de Carnicos, Lacteos y Conservas", "Tecnologico", "Tecnologico Facultad de Ciencias Quimicas", "Alexandra Criollo", "0995776576", "Docencia"],
  ["Laboratorio de Ingenieria Ambiental", "Balzay", "Bloque de laboratorios antiguos", "David Abad", "0979744269", "Docencia"],
  ["Laboratorio de geomatica y simulacion ambiental", "Balzay", "Bloque C", "Responsable: Danilo Mejia; Tecnico docente: David Abad", "0979744269", "Docencia"],
  ["Laboratorio de Calidad de agua y Microbiologia", "Campus Balzay", "Bloque de laboratorios antiguos", "Paulina Escobar", "0983154033", "Docencia"],
  ["Laboratorio de Ecologia Acuatica", "Balzay", "Bloque de laboratorios antiguos", "Diego Vimos", "0994481034", "Docencia"],
  ["Laboratorio de Microbiologia clinica", "Campus Central", "Facultad de Ciencias Quimicas", "Priscila Plaza", "0983198860", "Docencia"],
  ["Laboratorio de Analisis Instrumental", "Campus Central", "Facultad de Ciencias Quimicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Farmacognosia y fitoterapia", "Campus Central", "Facultad de Ciencias Quimicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Analisis Biologico y Genetica", "Campus Central", "Facultad de Ciencias Quimicas", "Andrea Cabrera", "0995746867", "Docencia"],
  ["Laboratorio de Alimentos: Fermentacion", "Balzay", "Bloque de laboratorios antiguos", "Jaime Cuenca", "0984929762", "Docencia"],
  ["Laboratorio de Materiales CEA", "Balzay", "Bloque de laboratorios antiguos", "Pablo Castro", "0983488783", "Docencia"],
  ["Laboratorio de Metalurgia", "Balzay", "Bloque de laboratorios antiguos", "Diana Brazales", "0993072124", "Docencia"],
  ["Laboratorio de Manipulacion de Solidos", "Balzay", "Bloque de laboratorios antiguos", "Diana Brazales", "0993072124", "Docencia"],
  ["Laboratorio de Ceramica", "Balzay", "Bloque de laboratorios antiguos", "Pablo Castro", "0983488783", "Docencia"],
  ["Laboratorio CESEMIN", "Balzay", "Bloque de laboratorios antiguos", "Marcela Idrovo", "0995973466", "Docencia/Atencion al Publico"],
  ["Laboratorio de Analisis Organico", "Campus Central", "Facultad de Ciencias Quimicas", "Bqf. Fabricio Riera Astudillo", "0992624208", "Docencia"],
];

const statusCycle = [
  ["Operativo", "ok"],
  ["Revision programada", "warn"],
  ["Alta demanda", "alert"],
];

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalizeCampus = (value) => {
  const campus = value.toLowerCase();
  if (campus.includes("balzay")) return "Campus Balzay";
  if (campus.includes("tecnologico")) return "Laboratorio Tecnologico";
  return "Campus Central";
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const parseResponsible = (value, phone) => {
  const people = value
    .replace(/\s+/g, " ")
    .trim()
    .split(";")
    .map((part) => {
      const [rawRole, rawName] = part.includes(":") ? part.split(":") : ["Responsable", part];
      return { name: rawName.trim(), role: rawRole.trim() || "Responsable" };
    })
    .filter((person) => person.name);

  return people.map((person, index) => [
    person.name,
    `${person.role}${phone ? ` · ${phone}` : ""}`,
    ["a", "b", "c"][index % 3],
  ]);
};

const makeEquipment = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("microbiologia")) {
    return [
      ["Cabina de bioseguridad", "BSC-FCQ", "Operativo", "Certificacion semestral"],
      ["Autoclave", "AUTO-LAB", "Revision programada", "Prueba biologica mensual"],
      ["Incubadora", "INC-37", "Operativo", "Limpieza semanal"],
    ];
  }
  if (lower.includes("digital") || lower.includes("manufactura") || lower.includes("industria")) {
    return [
      ["Estacion de prototipado", "FAB-FCQ", "Operativo", "Mantenimiento preventivo"],
      ["Modulo de control", "PLC-LAB", "Alta demanda", "Verificacion de sensores"],
      ["Herramienta especializada", "IND-01", "Operativo", "Revision de seguridad"],
    ];
  }
  if (lower.includes("agua") || lower.includes("ambiental") || lower.includes("suelos")) {
    return [
      ["Multiparametro", "MP-FCQ", "Operativo", "Calibracion mensual"],
      ["Equipo de filtracion", "FIL-01", "Operativo", "Cambio de membranas"],
      ["Balanza analitica", "BAL-220", "Revision programada", "Verificacion interna"],
    ];
  }
  return [
    ["Balanza analitica", "BAL-FCQ", "Operativo", "Verificacion mensual"],
    ["Campana de extraccion", "CE-01", "Operativo", "Revision de flujo"],
    ["Equipo principal", "LAB-CORE", "Revision programada", "Plan preventivo trimestral"],
  ];
};

const makeSupplies = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("microbiologia")) {
    return [["Medios de cultivo", "Por levantar", "Medio"], ["Placas esteriles", "Por levantar", "Medio"], ["EPP microbiologico", "Por levantar", "Alto"]];
  }
  if (lower.includes("metalurgia") || lower.includes("ceramica") || lower.includes("solidos")) {
    return [["Muestras minerales", "Por levantar", "Medio"], ["Crisoles y moldes", "Por levantar", "Medio"], ["EPP termico", "Por levantar", "Alto"]];
  }
  return [["Reactivos base", "Por levantar", "Medio"], ["Material de vidrio", "Por levantar", "Alto"], ["Elementos de proteccion", "Por levantar", "Alto"]];
};

const labs = sourceLabs.map(([name, rawCampus, building, responsible, phone, activity], index) => {
  const [status, health] = statusCycle[index % statusCycle.length];
  const campus = normalizeCampus(rawCampus);
  return {
    id: `${slugify(name)}-${index + 1}`,
    name,
    campus,
    building,
    area: activity,
    status,
    health,
    description: `${name} de la Facultad de Ciencias Quimicas orientado a ${activity.toLowerCase()}. Esta ficha centraliza responsables, equipos, insumos, PNT, mantenimiento y agenda de uso.`,
    responsible: parseResponsible(responsible, phone),
    equipment: makeEquipment(name),
    supplies: makeSupplies(name),
    pnt: [`PNT-${String(index + 1).padStart(2, "0")}-01 Uso del laboratorio`, `PNT-${String(index + 1).padStart(2, "0")}-02 Bioseguridad`, `PNT-${String(index + 1).padStart(2, "0")}-03 Gestion de residuos`],
    agenda: [["08:00", "Bloque de docencia"], ["11:00", "Preparacion y limpieza"], ["15:00", "Reserva academica o investigacion"]],
  };
});

let selectedCampus = "Todos";
let selectedLab = labs[0].id;

const labList = document.querySelector("#labList");
const labDetail = document.querySelector("#labDetail");
const labNav = document.querySelector("#labNav");
const campusButtons = document.querySelectorAll(".campus-pill");

function filteredLabs() {
  return selectedCampus === "Todos" ? labs : labs.filter((lab) => lab.campus === selectedCampus);
}

function selectLab(labId) {
  selectedLab = labId;
  render();
  document.querySelector("#laboratorios")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLabNav() {
  labNav.innerHTML = filteredLabs()
    .map(
      (lab, index) => `
        <button class="lab-nav-item ${lab.id === selectedLab ? "active" : ""}" data-lab="${lab.id}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${escapeHtml(lab.name.replace("Laboratorio de ", ""))}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".lab-nav-item").forEach((button) => {
    button.addEventListener("click", () => selectLab(button.dataset.lab));
  });
}

function renderLabList() {
  const visible = filteredLabs();
  if (!visible.some((lab) => lab.id === selectedLab)) {
    selectedLab = visible[0]?.id;
  }

  labList.innerHTML = visible
    .map(
      (lab) => `
        <button class="lab-card ${lab.id === selectedLab ? "active" : ""}" data-lab="${lab.id}">
          <div class="lab-card-header">
            <h3>${escapeHtml(lab.name)}</h3>
            <span class="health ${lab.health}">${lab.status}</span>
          </div>
          <p class="lab-meta">${lab.campus} · ${escapeHtml(lab.building)} · ${lab.area}</p>
          <div class="tag-row">
            <span class="tag">Mantenimiento</span>
            <span class="tag">Inventario</span>
            <span class="tag">Agenda</span>
          </div>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".lab-card").forEach((button) => {
    button.addEventListener("click", () => selectLab(button.dataset.lab));
  });
}

function renderDetail() {
  const lab = labs.find((item) => item.id === selectedLab);
  if (!lab) return;

  labDetail.innerHTML = `
    <div class="detail-hero">
      <span class="health ${lab.health}">${lab.status}</span>
      <h2>${escapeHtml(lab.name)}</h2>
      <p>${escapeHtml(lab.description)}</p>
      <div class="tag-row">
        <span class="tag">${lab.campus}</span>
        <span class="tag">${escapeHtml(lab.building)}</span>
      </div>
    </div>

    <div class="detail-body">
      <div class="section-title">
        <h3>Responsables</h3>
        <span class="muted">Datos tomados de la matriz de levantamiento</span>
      </div>
      <div class="responsible-grid">
        ${lab.responsible
          .map(
            ([name, role, avatar]) => `
              <div class="responsible">
                <span class="avatar ${avatar}" aria-hidden="true"></span>
                <span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(role)}</small></span>
              </div>
            `,
          )
          .join("")}
      </div>

      <div class="module-grid" id="mantenimiento">
        <div class="module blue"><span>Plan de mantenimiento</span><strong>${lab.equipment.length}</strong><small class="muted">equipos iniciales</small></div>
        <div class="module gold"><span>Inventario de insumos</span><strong>${lab.supplies.length}</strong><small class="muted">rubros por levantar</small></div>
        <div class="module coral"><span>Planes normalizados</span><strong>${lab.pnt.length}</strong><small class="muted">PNT base</small></div>
      </div>

      <div class="section-title">
        <h3>Equipos</h3>
        <button class="primary">Registrar intervencion</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Equipo</th><th>Modelo</th><th>Estado</th><th>Plan</th></tr></thead>
          <tbody>
            ${lab.equipment.map(([name, model, status, plan]) => `<tr><td>${name}</td><td>${model}</td><td>${status}</td><td>${plan}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="section-title">
        <h3>Inventario de insumos</h3>
        <span class="muted">Pendiente de cargar cantidades oficiales</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Insumo</th><th>Stock</th><th>Nivel</th></tr></thead>
          <tbody>
            ${lab.supplies.map(([name, stock, level]) => `<tr><td>${name}</td><td>${stock}</td><td>${level}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="section-title" id="pnt">
        <h3>Planes normalizados de trabajo</h3>
        <button class="primary">Subir PNT</button>
      </div>
      <div class="tag-row">${lab.pnt.map((item) => `<span class="tag">${item}</span>`).join("")}</div>

      <div class="section-title" id="agenda">
        <h3>Agenda de uso</h3>
        <span class="muted">Reservas base para prototipo</span>
      </div>
      <div class="agenda">
        ${lab.agenda
          .map(
            ([time, activity]) => `
              <div class="event">
                <time>${time}</time>
                <strong>${activity}</strong>
                <button class="icon-button" title="Ver reserva" aria-label="Ver reserva">›</button>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function render() {
  renderLabNav();
  renderLabList();
  renderDetail();
}

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;

  const controller = new AbortController();
  const campusValues = ["Todos", ...new Set(labs.map((lab) => lab.campus))];

  const selectCampus = (campus) => {
    if (!campusValues.includes(campus)) {
      throw new Error("Campus no reconocido");
    }
    selectedCampus = campus;
    campusButtons.forEach((item) => item.classList.toggle("active", item.dataset.campus === campus));
    render();
    return { campus: selectedCampus, laboratories: filteredLabs().map((lab) => lab.name) };
  };

  const selectLaboratory = (labId) => {
    const lab = labs.find((item) => item.id === labId);
    if (!lab) {
      throw new Error("Laboratorio no reconocido");
    }
    selectedCampus = lab.campus;
    selectedLab = lab.id;
    campusButtons.forEach((item) => item.classList.toggle("active", item.dataset.campus === selectedCampus));
    render();
    return { laboratory: lab.name, campus: lab.campus, status: lab.status };
  };

  try {
    context.registerTool(
      {
        name: "select_campus",
        title: "Seleccionar campus",
        description: "Filtra la plataforma para mostrar los laboratorios de un campus.",
        inputSchema: {
          type: "object",
          properties: { campus: { type: "string", enum: campusValues } },
          required: ["campus"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          return selectCampus(input?.campus);
        },
      },
      { signal: controller.signal },
    );

    context.registerTool(
      {
        name: "select_laboratory",
        title: "Abrir laboratorio",
        description: "Abre el panel de detalle de un laboratorio por su identificador.",
        inputSchema: {
          type: "object",
          properties: { labId: { type: "string", enum: labs.map((lab) => lab.id) } },
          required: ["labId"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          return selectLaboratory(input?.labId);
        },
      },
      { signal: controller.signal },
    );
  } catch (error) {
    console.warn("WebMCP no disponible", error);
  }
}

campusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCampus = button.dataset.campus;
    campusButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

render();
registerWebMcpTools();
