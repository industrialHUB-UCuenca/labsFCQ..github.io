const sourceLabs = [
  ["Laboratorio de Microscopía", "Campus Central", "Facultad de Ciencias Químicas", "Mónica Narváez", "0987224326", "Docencia"],
  ["Laboratorio de Toxicología Clínica", "Campus Central", "Facultad de Ciencias Químicas", "Mónica Narváez", "0987224326", "Docencia"],
  ["Laboratorio de Tecnología Farmacéutica", "Campus Central", "Facultad de Ciencias Químicas", "María Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Análisis Bromatológico", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "María Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Microbiología de Alimentos", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Responsable: Jessica León; Técnico docente: María Montaleza", "0988898045", "Docencia"],
  ["Laboratorio de Botánica", "Campus Central", "Facultad de Ciencias Químicas", "Maritza Dariana Lamulle Vicuña", "0995076993", "Docencia"],
  ["Laboratorio de Operaciones Unitarias", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Responsable: Jorge Delgado; Técnico docente: Verónica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Análisis de Suelos", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Jaime Cuenca", "0984929762", "Docencia"],
  ["Laboratorio de Humidificación", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Verónica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Energía e Ingeniería de la Reacción", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Responsable: Angélica Vele; Técnico docente: Verónica Saetama", "0995559600", "Docencia"],
  ["Laboratorio de Mineralogía", "Campus Central", "Facultad de Ciencias Químicas", "Christian Cruzat", "0983945653", "Docencia"],
  ["Laboratorio de Termodinámica y Fisicoquímica", "Campus Central", "Tecnológico Facultad de Ciencias Químicas", "Alexandra Criollo", "0995776576", "Docencia"],
  ["Laboratorio de Química", "Campus Central", "Facultad de Ciencias Químicas", "Israel Astudillo", "0983336244", "Docencia"],
  ["Laboratorio de Química Orgánica", "Campus Central", "Facultad de Ciencias Químicas", "Fabricio Riera", "", "Docencia"],
  ["Laboratorio de Análisis Cuantitativo", "Campus Central", "Facultad de Ciencias Químicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Fabricación Digital-Industrial FABLAB (Ingeniería Industrial)", "Balzay", "Bloque C", "Responsable: Noé Rodrigo Guamán G.; Técnico docente: Jenny Maritza Rojas Q.", "0995638810", "Docencia"],
  ["Laboratorio de Manufactura Flexible (Ingeniería Industrial)", "Balzay", "Bloque C", "Responsable: Noé Rodrigo Guamán G.; Técnico docente: Fernando Cajamarca Guamabaña", "0995638810", "Docencia"],
  ["Laboratorio de Industria 4.0 (Ingeniería Industrial)", "Balzay", "Bloque C", "Responsable: Noé Rodrigo Guamán G.; Técnico docente: Jenny Maritza Rojas Q.", "0995638810", "Docencia"],
  ["Laboratorio de Máquinas Herramientas (Ingeniería Industrial)", "Tecnológico", "Tecnológico Facultad de Ciencias Químicas", "Responsable: Manuel Raúl Peláez Samaniego", "0990791031", "Docencia"],
  ["Laboratorio de Cárnicos, Lácteos y Conservas", "Tecnológico", "Tecnológico Facultad de Ciencias Químicas", "Alexandra Criollo", "0995776576", "Docencia"],
  ["Laboratorio de Ingeniería Ambiental", "Balzay", "Bloque de Laboratorios Antiguos", "David Abad", "0979744269", "Docencia"],
  ["Laboratorio de Geomática y Simulación Ambiental", "Balzay", "Bloque C", "Responsable: Danilo Mejía; Técnico docente: David Abad", "0979744269", "Docencia"],
  ["Laboratorio de Calidad de Agua y Microbiología", "Campus Balzay", "Bloque de Laboratorios Antiguos", "Paulina Escobar", "0983154033", "Docencia"],
  ["Laboratorio de Ecología Acuática", "Balzay", "Bloque de Laboratorios Antiguos", "Diego Vimos", "0994481034", "Docencia"],
  ["Laboratorio de Microbiología Clínica", "Campus Central", "Facultad de Ciencias Químicas", "Priscila Plaza", "0983198860", "Docencia"],
  ["Laboratorio de Análisis Instrumental", "Campus Central", "Facultad de Ciencias Químicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Farmacognosia y Fitoterapia", "Campus Central", "Facultad de Ciencias Químicas", "Freddy Enrique Bustamante Pacheco", "0969366873", "Docencia"],
  ["Laboratorio de Análisis Biológico y Genética", "Campus Central", "Facultad de Ciencias Químicas", "Andrea Cabrera", "0995746867", "Docencia"],
  ["Laboratorio de Alimentos: Fermentación", "Balzay", "Bloque de Laboratorios Antiguos", "Jaime Cuenca", "0984929762", "Docencia"],
  ["Laboratorio de Materiales CEA", "Balzay", "Bloque de Laboratorios Antiguos", "Pablo Castro", "0983488783", "Docencia"],
  ["Laboratorio de Metalurgia", "Balzay", "Bloque de Laboratorios Antiguos", "Diana Brazales", "0993072124", "Docencia"],
  ["Laboratorio de Manipulación de Sólidos", "Balzay", "Bloque de Laboratorios Antiguos", "Diana Brazales", "0993072124", "Docencia"],
  ["Laboratorio de Cerámica", "Balzay", "Bloque de Laboratorios Antiguos", "Pablo Castro", "0983488783", "Docencia"],
  ["Laboratorio CESEMIN", "Balzay", "Bloque de Laboratorios Antiguos", "Marcela Idrovo", "0995973466", "Docencia/Atención al Público"],
  ["Laboratorio de Análisis Orgánico", "Campus Central", "Facultad de Ciencias Químicas", "Bqf. Fabricio Riera Astudillo", "0992624208", "Docencia"],
];

const campusOrder = ["Campus Central", "Campus Balzay", "Laboratorio Tecnológico"];

const photoByResponsible = {
  "Noé Rodrigo Guamán G.": "assets/responsables/noe-rodrigo-guaman.jpg",
  "Jenny Maritza Rojas Q.": "assets/responsables/jenny-maritza-rojas.jpg",
};

const emailByResponsible = {
  "Noé Rodrigo Guamán G.": "rodrigo.guaman@ucuenca.edu.ec",
  "Jenny Maritza Rojas Q.": "maritza.rojas@ucuenca.edu.ec",
};

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeCampus(value) {
  const campus = value.toLowerCase();
  if (campus.includes("balzay")) return "Campus Balzay";
  if (campus.includes("tecnologico") || campus.includes("tecnológico")) return "Laboratorio Tecnológico";
  return "Campus Central";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseResponsible(value, phone) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .split(";")
    .map((part) => {
      const [rawRole, rawName] = part.includes(":") ? part.split(":") : ["Responsable", part];
      const name = rawName.trim();
      return { name, role: rawRole.trim() || "Responsable", phone, email: emailByResponsible[name], photo: photoByResponsible[name] };
    })
    .filter((person) => person.name);
}

function makeEquipment(name) {
  const lower = name.toLowerCase();
  if (lower.includes("microbiologia") || lower.includes("microbiología")) return ["Cabina de bioseguridad", "Autoclave", "Incubadora"];
  if (lower.includes("digital") || lower.includes("manufactura") || lower.includes("industria")) {
    return ["Estacion de prototipado", "Modulo de control", "Herramienta especializada"];
  }
  if (lower.includes("agua") || lower.includes("ambiental") || lower.includes("suelos")) {
    return ["Multiparámetro", "Equipo de filtración", "Balanza analítica"];
  }
  return ["Balanza analítica", "Campana de extracción", "Equipo principal"];
}

const labs = sourceLabs.map(([name, rawCampus, building, responsible, phone, activity], index) => ({
  id: `${slugify(name)}-${index + 1}`,
  number: index + 1,
  name,
  shortName: name.replace("Laboratorio de ", "").replace("Laboratorio ", ""),
  campus: normalizeCampus(rawCampus),
  building,
  activity,
  responsible: parseResponsible(responsible, phone),
  equipment: makeEquipment(name),
  supplies: ["Reactivos e insumos base", "Material de laboratorio", "Elementos de protección"],
  pnt: [
    `PNT-${String(index + 1).padStart(2, "0")}-01 Uso del laboratorio`,
    `PNT-${String(index + 1).padStart(2, "0")}-02 Bioseguridad`,
    `PNT-${String(index + 1).padStart(2, "0")}-03 Gestión de residuos`,
  ],
  agenda: ["Bloque de docencia", "Preparación y limpieza", "Reserva académica o investigación"],
}));

function closeCampusMenus(except) {
  document.querySelectorAll(".nav-group").forEach((group) => {
    if (group !== except) group.removeAttribute("open");
  });
}

function setupCampusMenuBehavior() {
  const groups = document.querySelectorAll(".nav-group");

  groups.forEach((group) => {
    group.addEventListener("toggle", () => {
      if (group.open) closeCampusMenus(group);
    });

    group.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeCampusMenus());
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".campus-menu")) closeCampusMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCampusMenus();
  });
}
