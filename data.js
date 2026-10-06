const sourceLabs = [
  [
    "Laboratorio de Microscopia",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Mónica Narváez",
    "0987224326",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Toxicología Clínica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Mónica Narváez",
    "0987224326",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Tecnología Farmacéutica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "María Montaleza",
    "0988898045",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Análisis Bromatológico",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "María Montaleza",
    "0988898045",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Microbiología de Alimentos",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Jessica León; Técnico docente: María Montaleza",
    "0988898045",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Botánica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Maritza Dariana Lamulle Vicuña",
    "0995076993",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Operaciones Unitarias",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Jorge Delgado; Técnico docente: Verónica Saetama",
    "0995559600",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Análisis de Suelos",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Sonia Astudillo; Técnico docente: Jaime Cuenca",
    "0984929762",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Humidificación",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Diana Andrade; Técnico docente: Verónica Saetama",
    "0995559600",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Energía e Ingeniería de la reacción",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Verónica Pinos; Técnico docente: Verónica Saetama",
    "0995559600",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Mineralogía",
    "Campus Central",
    "",
    "Responsable: Christian Cruzat; Técnico docente: Pablo Castro",
    "0983945653",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Termodinámica y Fisicoquímica",
    "Campus Central",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Angélica Vele; Técnico docente: Alexandra Criollo",
    "0995776576",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Química",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Responsable: Andrea Iñiguez; Técnico docente: Israel Astudillo",
    "0983336244",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Química Orgánica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Responsable: Ana Astudillo; Técnico docente: Fabricio Riera",
    "",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Análisis Cuantitativo",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Freddy Enrique Bustamante Pacheco",
    "0969366873",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Fabricación Digital - FABLAB",
    "Balzay",
    "Bloque C",
    "Responsable: Noé Rodrigo Guamán G.; Técnico docente: Jenny Maritza Rojas Q.",
    "0995638810",
    "Docencia",
    "Ingeniería Industrial"
  ],
  [
    "Laboratorio de Manufactura Flexible (Ingeniería Industrial)",
    "Balzay",
    "Bloque C",
    "Responsable: Paúl Álvarez; Técnico docente: Fernando Cajamarca Guamabaña",
    "0995638810",
    "Docencia",
    "Ingeniería Industrial"
  ],
  [
    "Laboratorio de Industria 4.0 (Ingeniería Industrial)",
    "Balzay",
    "Bloque C",
    "Responsable: Noé Rodrigo Guamán G.; Técnico docente: Jenny Maritza Rojas Q.",
    "0995638810",
    "Docencia",
    "Ingeniería Industrial"
  ],
  [
    "Laboratorio de máquinas herramientas (Ingeniería Industrial)",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Manuel Raúl Peláez Samaniego; Técnico docente: Fernando Cajamarca Guamabaña",
    "0990791031",
    "Docencia",
    "Ingeniería Industrial"
  ],
  [
    "Laboratorio de Cárnicos, Lácteos y Conservas",
    "Tecnológico",
    "Tecnológico Facultad de Ciencias Químicas",
    "Responsable: Daniela Zúñiga, Servio Astudillo y Patrici Ramirez; Técnico docente: Alexandra Criollo",
    "0995776576",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Ingeniería Ambiental",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Responsable: Alexandra Guanuchi; Técnico docente: Samantha Ramírez",
    "0979744269",
    "Docencia",
    "Ingeniería Ambiental"
  ],
  [
    "Laboratorio de Geomática y Simulación ambiental",
    "Balzay",
    "Bloque C",
    "Responsable: Danilo Mejía; Técnico docente: Samantha Ramírez",
    "0979744269",
    "Docencia",
    "Ingeniería Ambiental"
  ],
  [
    "Laboratorio de Calidad de agua y Microbiología",
    "Campus Balzay",
    "Bloque de laboratorios antiguos",
    "Responsable: Alexandra Guanuchi Paulina Escobar",
    "0983154033",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Ecología Acuática",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Diego Vimos",
    "0994481034",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Microbiología clínica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Priscila Plaza",
    "0983198860",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Análisis Instrumental",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Freddy Enrique Bustamante Pacheco",
    "0969366873",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Farmacognosia y Fitoterapia",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Freddy Enrique Bustamante Pacheco",
    "0969366873",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Análisis Biológico y Génetica",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Andrea Cabrera",
    "0995746867",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Alimentos: Fermentación",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Responsable: Javier Astudillo; Técnico docente: Jaime Cuenca",
    "0984929762",
    "Docencia",
    "Bioquímica y Farmacia"
  ],
  [
    "Laboratorio de Materiales CEA",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Responsable: María eulalia Vanegas; Técnico docente: Pablo Castro",
    "0983488783",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Metalurgia",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Diana Brazales",
    "0993072124",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Manipulación de Sólidos",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Diana Brazales",
    "0993072124",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Cerámica",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Pablo Castro",
    "0983488783",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio CESEMIN",
    "Balzay",
    "Bloque de laboratorios antiguos",
    "Marcela Idrovo",
    "0995973466",
    "Docencia/Atención al Público",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Análisis Orgánico",
    "Campus Central",
    "Facultad de Ciencias Químicas",
    "Bqf. Fabricio Riera Astudillo",
    "0992624208",
    "Docencia",
    "Ingeniería Química"
  ],
  [
    "Laboratorio de Gestión de Residuos Sólidos",
    "Balzay",
    "Junto a la cafetería",
    "Responsable: Juan Cisneros; Técnico docente: Samantha Ramírez",
    "",
    "Docencia",
    "Ingeniería Ambiental"
  ]
];

const campusOrder = ["Campus Central", "Campus Balzay", "Laboratorio Tecnológico"];

const photoByResponsible = {

  "Mónica Narváez": "assets/responsables/monica-narvaez-vera.jpg",
  "Jéssica León": "assets/responsables/jessica-leon-viznay.jpg",
  "Jorge Delgado": "assets/responsables/jorge-delgado-noboa.jpg",
  "Verónica Saetama": "assets/responsables/maria-veronica-saetama-guallpa.jpg",
  "Jaime Cuenca": "assets/responsables/jaime-cuenca-leon.jpg",
  "Christian Cruzat": "assets/responsables/christian-cruzat-contreras.jpg",
  "Alexandra Criollo": "assets/responsables/diana-alexandra-criollo-ayala.jpg",
  "Israel Astudillo": "assets/responsables/jorge-israel-astudillo-zuniga.jpg",
  "Fabricio Riera": "assets/responsables/pablo-fabricio-riera-astudillo.jpg",
  "Freddy Enrique Bustamante Pacheco": "assets/responsables/freddy-enrique-bustamante-pacheco.jpg",
  "María Montaleza": "assets/responsables/maria-montaleza.jpg",
  "Noé Rodrigo Guamán G.": "assets/responsables/noe-rodrigo-guaman.jpg",
  "Jenny Maritza Rojas Q.": "assets/responsables/jenny-maritza-rojas.jpg",
  "Jorge Delgado Noboa": "assets/responsables/jorge-delgado-noboa.jpg",
  "Jéssica León Vizñay": "assets/responsables/jessica-leon-viznay.jpg",
  "Andrea Cabrera Andrade": "assets/responsables/andrea-cabrera-andrade.jpg",
  "Mónica Narváez Vera": "assets/responsables/monica-narvaez-vera.jpg",
  "María Verónica Saetama Guallpa": "assets/responsables/maria-veronica-saetama-guallpa.jpg",
  "Maritza Lamulle Vicuña": "assets/responsables/maritza-lamulle-vicuna.jpg",
  "Jaime Cuenca León": "assets/responsables/jaime-cuenca-leon.jpg",
  "Christian Cruzat Contreras": "assets/responsables/christian-cruzat-contreras.jpg",
  "Diana Alexandra Criollo Ayala": "assets/responsables/diana-alexandra-criollo-ayala.jpg",
  "Jorge Israel Astudillo Zúñiga": "assets/responsables/jorge-israel-astudillo-zuniga.jpg",
  "Pablo Fabricio Riera Astudillo": "assets/responsables/pablo-fabricio-riera-astudillo.jpg",
  "BQF. Pablo Fabricio Riera Astudillo": "assets/responsables/pablo-fabricio-riera-astudillo.jpg",
  "Julio Danilo Mejía Coronel": "assets/responsables/julio-danilo-mejia-coronel.jpg",
  "Paulina Escobar Hinojosa": "assets/responsables/paulina-escobar-hinojosa.jpg",
};

const emailByResponsible = {

  "Mónica Narváez": "",
  "Jorge Delgado": "",
  "Noé Rodrigo Guamán G.": "rodrigo.guaman@ucuenca.edu.ec",
  "Freddy Enrique Bustamante Pacheco": "freddy.bustamante2607@ucuenca.edu.ec",
  "María Montaleza": "maria.montaleza@ucuenca.edu.ec",
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
    return ["Estación de prototipado", "Módulo de control", "Herramienta especializada"];
  }
  if (lower.includes("agua") || lower.includes("ambiental") || lower.includes("suelos")) {
    return ["Multiparámetro", "Equipo de filtración", "Balanza analítica"];
  }
  return ["Balanza analítica", "Campana de extracción", "Equipo principal"];
}

const labs = sourceLabs.map(([name, rawCampus, building, responsible, phone, activity, career], index) => ({
  id: `${slugify(name)}-${index + 1}`,
  number: index + 1,
  name,
  shortName: name.replace("Laboratorio de ", "").replace("Laboratorio ", ""),
  campus: normalizeCampus(rawCampus),
  building,
  career,
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
