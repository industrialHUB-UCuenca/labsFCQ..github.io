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

const safetyIconPaths = {
  coat: '<path d="M9 3h6l2 5-3 2v11H10V10L7 8l2-5Z"/><path d="M10 10h4"/><path d="M12 3v18"/>',
  goggles: '<path d="M3 11h4l2 3h6l2-3h4"/><path d="M4 11V8h5l2 6"/><path d="M20 11V8h-5l-2 6"/><path d="M2 8h20"/>',
  gloves: '<path d="M7 20V9a2 2 0 0 1 4 0v5"/><path d="M11 14V6a2 2 0 0 1 4 0v8"/><path d="M15 14V8a2 2 0 0 1 4 0v5c0 5-3 8-7 8H7"/>',
  mask: '<path d="M4 10c4-3 12-3 16 0v4c-4 4-12 4-16 0v-4Z"/><path d="M7 13h10"/><path d="M4 11H2"/><path d="M20 11h2"/>',
  shower: '<path d="M5 10a7 7 0 0 1 14 0"/><path d="M4 10h16"/><path d="M8 14v.01"/><path d="M12 14v.01"/><path d="M16 14v.01"/><path d="M10 18v.01"/><path d="M14 18v.01"/>',
  biohazard: '<circle cx="12" cy="12" r="2"/><path d="M12 10c-1-4 1-7 4-7 2 0 3 2 2 4"/><path d="M10 13c-4 2-7 1-8-2-1-2 0-4 2-5"/><path d="M14 13c4 2 7 1 8-2 1-2 0-4-2-5"/>',
  ventilation: '<path d="M4 17h10a3 3 0 1 0-3-3"/><path d="M4 12h14a3 3 0 1 0-3-3"/><path d="M4 7h7"/>',
  waste: '<path d="M5 7h14"/><path d="M8 7V5h8v2"/><path d="M7 7l1 14h8l1-14"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  induction: '<path d="M4 4h16v16H4z"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="M8 17h8"/>',
  equipment: '<path d="M5 5h14v10H5z"/><path d="M8 19h8"/><path d="M12 15v4"/><path d="M9 9h6"/>',
  fire: '<path d="M12 22c4 0 7-3 7-7 0-3-2-6-5-8 0 3-2 4-2 4S9 8 10 3c-3 2-5 6-5 10 0 5 3 9 7 9Z"/><path d="M12 18c1.7 0 3-1.3 3-3 0-1.2-.8-2.4-2-3 0 1.5-1 2-1 2s-1.5-1.2-1-3c-1.4 1-2 2.5-2 4 0 1.7 1.3 3 3 3Z"/>',
};

function safetyIcon(name) {
  return `
    <svg class="safety-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        ${safetyIconPaths[name]}
      </g>
    </svg>
  `;
}

function getSafetyRequirements(item) {
  const text = `${item.name} ${item.career} ${item.building}`.toLowerCase();
  const requirements = [
    { icon: "coat", label: "Bata de laboratorio", detail: "Uso obligatorio durante la permanencia en el laboratorio." },
    { icon: "goggles", label: "Protección ocular", detail: "Gafas de seguridad para preparación, medición y manipulación de muestras." },
    { icon: "gloves", label: "Guantes de protección", detail: "Seleccionar el tipo de guante según sustancia, muestra o equipo utilizado." },
    { icon: "induction", label: "Inducción previa", detail: "Ingreso permitido después de conocer normas, riesgos y rutas de emergencia." },
    { icon: "waste", label: "Gestión de residuos", detail: "Segregación, rotulado y disposición según el PNT vigente del laboratorio." },
  ];

  if (text.includes("microbiolog") || text.includes("clínica") || text.includes("biológico") || text.includes("genética")) {
    requirements.splice(3, 0, { icon: "biohazard", label: "Bioseguridad", detail: "Aplicar barreras, desinfección y manejo seguro de material biológico." });
  }

  if (
    text.includes("química") ||
    text.includes("farmacéutica") ||
    text.includes("bromatológico") ||
    text.includes("toxicología") ||
    text.includes("suelos") ||
    text.includes("orgánica")
  ) {
    requirements.splice(3, 0, { icon: "ventilation", label: "Ventilación o campana", detail: "Usar campana de extracción cuando exista emisión de vapores o aerosoles." });
  }

  if (
    text.includes("máquinas") ||
    text.includes("manufactura") ||
    text.includes("industria") ||
    text.includes("fablab") ||
    text.includes("operaciones") ||
    text.includes("materiales") ||
    text.includes("metalurgia")
  ) {
    requirements.splice(3, 0, { icon: "equipment", label: "Registro de uso de equipos", detail: "Operar equipos solo con autorización y registrar cada uso." });
  }

  if (text.includes("residuos") || text.includes("orgánica") || text.includes("toxicología") || text.includes("ambiental")) {
    requirements.push({ icon: "fire", label: "Respuesta ante emergencias", detail: "Mantener despejado el acceso a extintor, ducha, lavaojos y señalética." });
  } else {
    requirements.push({ icon: "shower", label: "Ducha y lavaojos", detail: "Identificar su ubicación antes de iniciar la práctica o ensayo." });
  }

  return requirements;
}

function renderSafetyRequirements(items) {
  return `
    <div class="safety-grid">
      ${items
        .map(
          (item) => `
            <article class="safety-item">
              ${safetyIcon(item.icon)}
              <div>
                <strong>${escapeHtml(item.label)}</strong>
                <p>${escapeHtml(item.detail)}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function statusClass(value) {
  return String(value || "sin-estado")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function countBy(items, key) {
  return items.reduce((totals, item) => {
    const value = item[key] || "Sin estado";
    totals[value] = (totals[value] || 0) + 1;
    return totals;
  }, {});
}

function renderDataSummary(items, label, key = "estado") {
  const totals = countBy(items, key);
  return `
    <div class="data-summary">
      <article>
        <strong>${items.length}</strong>
        <span>${escapeHtml(label)}</span>
      </article>
      ${Object.entries(totals)
        .slice(0, 4)
        .map(
          ([name, total]) => `
            <article>
              <strong>${total}</strong>
              <span>${escapeHtml(name)}</span>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderEquipmentInventory(items) {
  if (!items?.length || typeof items[0] === "string") return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

  return `
    ${renderDataSummary(items, "equipos registrados")}
    <div class="inventory-table-wrap">
      <table class="inventory-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Equipo</th>
            <th>Estado</th>
            <th>Próximo mantenimiento</th>
            <th>Ficha</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item, index) => `
                <tr>
                  <td>
                    ${
                      item.fotoMiniatura
                        ? `<img class="equipment-thumb" src="${escapeHtml(item.fotoMiniatura)}" alt="${escapeHtml(item.nombre)}" loading="lazy" />`
                        : `<span class="equipment-thumb placeholder" aria-hidden="true">${safetyIcon("equipment")}</span>`
                    }
                  </td>
                  <td>
                    <strong>${escapeHtml(item.nombre)}</strong>
                    <small>${escapeHtml([item.codigo || "S/C", item.marca, item.modelo].filter(Boolean).join(" / "))}</small>
                  </td>
                  <td><span class="status-pill status-${statusClass(item.estado)}">${escapeHtml(item.estado || "Sin estado")}</span></td>
                  <td>${escapeHtml(item.proximo || "No registrado")}</td>
                  <td><button class="table-action" type="button" data-equipment-index="${index}">Ver</button></td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderEquipmentModal() {
  return `
    <div class="equipment-modal" id="equipmentModal" hidden>
      <div class="equipment-modal-backdrop" data-close-equipment-modal></div>
      <section class="equipment-dialog" role="dialog" aria-modal="true" aria-labelledby="equipmentModalTitle">
        <button class="equipment-close" type="button" data-close-equipment-modal aria-label="Cerrar ficha de equipo">×</button>
        <div class="equipment-dialog-media" id="equipmentModalMedia"></div>
        <div class="equipment-dialog-body">
          <p class="kicker">Ficha de equipo</p>
          <h3 id="equipmentModalTitle"></h3>
          <dl id="equipmentModalSpecs"></dl>
        </div>
      </section>
    </div>
  `;
}

function renderMaintenancePlan(items) {
  if (!items?.length || typeof items[0] === "string") return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

  const groups = items.reduce((collection, item) => {
    collection[item.equipo] ??= [];
    collection[item.equipo].push(item);
    return collection;
  }, {});

  return `
    ${renderDataSummary(items, "tareas de mantenimiento")}
    <div class="maintenance-accordion">
      ${Object.entries(groups)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(
          ([equipment, tasks], index) => `
            <details class="maintenance-group" ${index < 3 ? "open" : ""}>
              <summary>
                <strong>${escapeHtml(equipment)}</strong>
                <span>${tasks.length} tareas</span>
              </summary>
              <div class="maintenance-table-wrap">
                <table class="maintenance-table">
                  <thead>
                    <tr>
                      <th>Tarea</th>
                      <th>Frecuencia</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tasks
                      .map(
                        (task) => `
                          <tr>
                            <td>${escapeHtml(task.tarea)}</td>
                            <td>${escapeHtml(task.frecuencia || "Sin dato")}</td>
                            <td><span class="status-pill status-${statusClass(task.estado)}">${escapeHtml(task.estado || "Sin estado")}</span></td>
                            <td>${escapeHtml(task.fecha || task.finalizacion || "No registrada")}</td>
                          </tr>
                        `,
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTabItems(tab) {
  if (tab.id === "equipos") return renderEquipmentInventory(tab.items);
  if (tab.id === "mantenimiento") return renderMaintenancePlan(tab.items);
  if (tab.id === "seguridad") return renderSafetyRequirements(tab.items);
  if (tab.id === "agenda") return renderAgendaWorkspace();
  return `<ul>${tab.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

const timeSlots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00"];
const startTimeSlots = timeSlots.filter((time) => time !== "13:00" && time !== "18:00");
const endTimeSlots = timeSlots.filter((time) => time !== "07:00" && time !== "15:00");
let agendaRequests = [];
let agendaRole = "usuario";
let agendaDate = formatISODate(new Date());
let agendaWeekStart = startOfWeek(agendaDate);
let agendaAdminUnlocked = false;

function getAgendaConfig() {
  return window.AGENDA_CONFIG ?? { storageKey: "fcq-agenda-solicitudes" };
}

function normalizeDateValue(value) {
  const raw = String(value || "");
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return raw;
}

function normalizeTimeValue(value) {
  const raw = String(value || "");
  const match = raw.match(/\b(\d{1,2}):(\d{2})/);
  if (match) return `${match[1].padStart(2, "0")}:${match[2]}`;
  return raw;
}

function normalizeAgendaItem(item) {
  return {
    ...item,
    date: normalizeDateValue(item.date),
    start: normalizeTimeValue(item.start),
    end: normalizeTimeValue(item.end),
  };
}

function dateFromISO(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(value, days) {
  const date = dateFromISO(value);
  date.setDate(date.getDate() + days);
  return formatISODate(date);
}

function startOfWeek(value) {
  const date = dateFromISO(value);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  return formatISODate(date);
}

function formatDisplayDate(value) {
  return dateFromISO(value).toLocaleDateString("es-EC", { day: "2-digit", month: "short" });
}

function labAcronym(item) {
  const ignored = new Set(["de", "del", "la", "las", "los", "y", "e", "en", "el", "a"]);
  const words = item.shortName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word && !ignored.has(word.toLowerCase()));

  return words
    .slice(0, 4)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function labAdminCode(item) {
  const base = item.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const number = String((base % 90) + 10).padStart(2, "0");
  return `ADMI_${labAcronym(item)}${number}`;
}

function minutesFromTime(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function isAllowedRange(start, end) {
  const startMinutes = minutesFromTime(start);
  const endMinutes = minutesFromTime(end);
  const morning = startMinutes >= 420 && endMinutes <= 780;
  const afternoon = startMinutes >= 900 && endMinutes <= 1080;
  return endMinutes > startMinutes && (morning || afternoon);
}

function hasApprovedConflict(candidate, items = agendaRequests) {
  const start = minutesFromTime(candidate.start);
  const end = minutesFromTime(candidate.end);
  return items.some((item) => {
    if (item.id === candidate.id || item.labId !== lab.id || item.date !== candidate.date || item.status !== "APROBADA") return false;
    return start < minutesFromTime(item.end) && end > minutesFromTime(item.start);
  });
}

function readLocalAgenda() {
  try {
    return JSON.parse(localStorage.getItem(getAgendaConfig().storageKey) || "[]");
  } catch {
    return [];
  }
}

function writeLocalAgenda(items) {
  localStorage.setItem(getAgendaConfig().storageKey, JSON.stringify(items));
}

async function loadAgendaRequests() {
  agendaRequests = readLocalAgenda().map(normalizeAgendaItem);
}

function statusLabel(status) {
  const labels = {
    PENDIENTE: "Pendiente",
    APROBADA: "Aprobada",
    NEGADA: "Negada",
  };
  return labels[status] || status;
}

function renderAgendaWorkspace() {
  return `
    <div class="agenda-module">
      <div class="agenda-toolbar">
        <label>
          Ir a fecha
          <input id="agendaDate" type="date" value="${escapeHtml(agendaDate)}" />
        </label>
        <div class="week-nav" aria-label="Navegación semanal">
          <button type="button" id="prevWeek" aria-label="Semana anterior">‹</button>
          <strong id="weekRange"></strong>
          <button type="button" id="nextWeek" aria-label="Semana siguiente">›</button>
          <button type="button" id="todayWeek">Hoy</button>
        </div>
        <div class="role-switch" aria-label="Rol de agenda">
          <button class="active" type="button" data-role="usuario">Solicitar espacio</button>
          <button type="button" data-role="admin">Administrar solicitudes</button>
        </div>
      </div>

      <div class="agenda-grid">
        <section class="agenda-board">
          <div>
            <p class="kicker">Agenda local</p>
            <h3>Vista semanal: 07:00-13:00 / 15:00-18:00</h3>
          </div>
          <div class="agenda-legend" aria-label="Estados de agenda">
            <span class="slot-disponible">Disponible</span>
            <span class="slot-pendiente">Pendiente</span>
            <span class="slot-ocupada">Ocupada</span>
          </div>
          <div class="schedule-rail" id="scheduleRail"></div>
          <div class="agenda-list" id="agendaList"></div>
        </section>

        <section class="agenda-panel">
          <div id="agendaUserPanel">
            <p class="kicker">Usuario</p>
            <h3>Solicitud de agenda</h3>
            <form class="agenda-form" id="agendaRequestForm">
              <label>Nombre del solicitante<input name="requester" required autocomplete="name" /></label>
              <label>Correo institucional<input name="email" type="email" required autocomplete="email" /></label>
              <div class="form-pair">
                <label>Fecha<input name="date" type="date" required value="${escapeHtml(agendaDate)}" /></label>
                <label>Hora de inicio<select name="start" required>${startTimeSlots.map((time) => `<option>${time}</option>`).join("")}</select></label>
              </div>
              <label>Hora de fin<select name="end" required>${endTimeSlots.map((time) => `<option>${time}</option>`).join("")}</select></label>
              <label>Actividad<textarea name="purpose" required rows="4" placeholder="Asignatura, práctica, equipo o motivo de uso"></textarea></label>
              <button class="button-link" type="submit">Enviar solicitud</button>
            </form>
          </div>

          <div id="agendaAdminPanel" hidden>
            <p class="kicker">Administrador</p>
            <h3>Aprobación del espacio</h3>
            <div class="admin-access" id="adminAccess">
              <label>Clave de administrador<input id="adminCode" type="password" autocomplete="off" placeholder="ADMI_${escapeHtml(labAcronym(lab))}##" /></label>
              <button class="button-link" type="button" id="unlockAdmin">Ingresar</button>
            </div>
            <div class="admin-queue" id="adminQueue"></div>
          </div>

          <p class="agenda-message" id="agendaMessage"></p>
        </section>
      </div>
    </div>
  `;
}

function slotStatus(date, start, end) {
  const matching = agendaItemsForCurrentLab().filter((item) => {
    if (item.date !== date || item.status === "NEGADA") return false;
    return minutesFromTime(start) < minutesFromTime(item.end) && minutesFromTime(end) > minutesFromTime(item.start);
  });

  if (matching.some((item) => item.status === "APROBADA")) return { status: "ocupada", label: "Ocupada" };
  if (matching.some((item) => item.status === "PENDIENTE")) return { status: "pendiente", label: "Pendiente" };
  return { status: "disponible", label: "Disponible" };
}

function agendaItemsForCurrentLab() {
  return agendaRequests
    .filter((item) => item.labId === lab.id)
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function renderScheduleRail() {
  const rail = document.querySelector("#scheduleRail");
  if (!rail) return;

  const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((label, index) => ({
    label,
    date: addDays(agendaWeekStart, index),
  }));
  const slots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00"];

  rail.innerHTML = `
    <div class="week-grid" style="--week-days: ${weekDays.length}">
      <div class="week-corner">Hora</div>
      ${weekDays
        .map(
          (day) => `
            <button class="week-day ${day.date === agendaDate ? "active" : ""}" type="button" data-date="${day.date}">
              <strong>${day.label}</strong>
              <span>${formatDisplayDate(day.date)}</span>
            </button>
          `,
        )
        .join("")}
      ${slots
        .map((slot) => {
          const end = `${String(Number(slot.slice(0, 2)) + 1).padStart(2, "0")}:00`;
          return `
            <div class="week-time">${slot}-${end}</div>
            ${weekDays
              .map((day) => {
                const state = slotStatus(day.date, slot, end);
                return `
                  <button
                    class="schedule-slot slot-${state.status} ${day.date === agendaDate ? "selected-day" : ""}"
                    type="button"
                    data-date="${day.date}"
                    data-start="${slot}"
                    data-end="${end}"
                    aria-label="${day.label} ${slot}-${end}: ${state.label}"
                  >
                    <strong>${slot}</strong>
                    <span>${state.label}</span>
                  </button>
                `;
              })
              .join("")}
          `;
        })
        .join("")}
    </div>
  `;
}

function renderWeekRange() {
  const target = document.querySelector("#weekRange");
  if (!target) return;
  const weekEnd = addDays(agendaWeekStart, 4);
  target.textContent = `${formatDisplayDate(agendaWeekStart)} - ${formatDisplayDate(weekEnd)}`;
}

function renderAgendaList() {
  const list = document.querySelector("#agendaList");
  if (!list) return;

  const dayItems = agendaItemsForCurrentLab().filter((item) => item.date === agendaDate);
  list.innerHTML = dayItems.length
    ? dayItems
        .map(
          (item) => `
            <article class="agenda-card status-${item.status.toLowerCase()}">
              <span>${escapeHtml(statusLabel(item.status))}</span>
              <strong>${escapeHtml(item.start)}-${escapeHtml(item.end)}</strong>
              <p>${escapeHtml(item.purpose)}</p>
              <small>${escapeHtml(item.requester)} / ${escapeHtml(item.email)}</small>
            </article>
          `,
        )
        .join("")
    : `<p class="empty-agenda">No hay solicitudes registradas para esta fecha.</p>`;
}

function renderAdminQueue() {
  const queue = document.querySelector("#adminQueue");
  const access = document.querySelector("#adminAccess");
  if (!queue || !access) return;

  access.hidden = agendaAdminUnlocked;
  if (!agendaAdminUnlocked) {
    queue.innerHTML = `<p class="empty-agenda">Ingrese la clave para revisar y editar las solicitudes de este laboratorio.</p>`;
    return;
  }

  const requests = agendaItemsForCurrentLab().slice().reverse();
  const actions = [
    { status: "PENDIENTE", label: "Pendiente" },
    { status: "APROBADA", label: "Aprobar" },
    { status: "NEGADA", label: "Negar" },
  ];

  queue.innerHTML = requests.length
    ? requests
        .map(
          (item) => `
            <article class="admin-request status-${item.status.toLowerCase()}">
              <em>${escapeHtml(statusLabel(item.status))}</em>
              <span>${escapeHtml(item.date)} / ${escapeHtml(item.start)}-${escapeHtml(item.end)}</span>
              <strong>${escapeHtml(item.purpose)}</strong>
              <small>${escapeHtml(item.requester)} / ${escapeHtml(item.email)}</small>
              <div>
                ${actions
                  .map(
                    (action) => `
                      <button
                        type="button"
                        class="${item.status === action.status ? "active" : ""}"
                        data-agenda-action="${action.status}"
                        data-request-id="${escapeHtml(item.id)}"
                        ${item.status === action.status ? "disabled" : ""}
                      >${action.label}</button>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          `,
        )
        .join("")
    : `<p class="empty-agenda">No hay solicitudes registradas para este laboratorio.</p>`;
}

function setAgendaMessage(message, tone = "info") {
  const target = document.querySelector("#agendaMessage");
  if (!target) return;
  target.textContent = message;
  target.dataset.tone = tone;
}

function refreshAgendaUI() {
  const dateInput = document.querySelector("#agendaDate");
  const formDate = document.querySelector("#agendaRequestForm [name='date']");
  if (dateInput) dateInput.value = agendaDate;
  if (formDate) formDate.value = agendaDate;

  document.querySelector("#agendaUserPanel")?.toggleAttribute("hidden", agendaRole !== "usuario");
  document.querySelector("#agendaAdminPanel")?.toggleAttribute("hidden", agendaRole !== "admin");
  document.querySelectorAll("[data-role]").forEach((button) => button.classList.toggle("active", button.dataset.role === agendaRole));
  renderWeekRange();
  renderScheduleRail();
  renderAgendaList();
  renderAdminQueue();
}

async function createAgendaRequest(form) {
  const formData = new FormData(form);
  const request = {
    id: `REQ-${Date.now()}`,
    labId: lab.id,
    labName: lab.name,
    campus: lab.campus,
    date: String(formData.get("date")),
    start: String(formData.get("start")),
    end: String(formData.get("end")),
    requester: String(formData.get("requester")).trim(),
    email: String(formData.get("email")).trim(),
    purpose: String(formData.get("purpose")).trim(),
    status: "PENDIENTE",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (!isAllowedRange(request.start, request.end)) {
    setAgendaMessage("Seleccione un horario dentro de 07:00-13:00 o 15:00-18:00.", "error");
    return;
  }

  if (hasApprovedConflict(request)) {
    setAgendaMessage("Ya existe una reserva aprobada que cruza ese horario.", "error");
    return;
  }

  const localItems = readLocalAgenda().filter((item) => item.id !== request.id);
  localItems.push(request);
  writeLocalAgenda(localItems);
  await loadAgendaRequests();
  agendaDate = request.date;
  agendaWeekStart = startOfWeek(agendaDate);
  form.reset();
  setAgendaMessage("Solicitud registrada. Queda pendiente de aprobación.", "success");
  refreshAgendaUI();
}

async function updateAgendaStatus(requestId, status) {
  const target = agendaRequests.find((item) => item.id === requestId);
  if (!target) return;

  if (status === "APROBADA" && hasApprovedConflict({ ...target, status: "APROBADA" })) {
    setAgendaMessage("No se puede aprobar: cruza con una reserva ya aprobada.", "error");
    return;
  }

  const updated = { ...target, status, updatedAt: new Date().toISOString() };
  const localItems = readLocalAgenda().filter((item) => item.id !== requestId);
  localItems.push(updated);
  writeLocalAgenda(localItems);
  await loadAgendaRequests();
  setAgendaMessage(`Solicitud marcada como ${statusLabel(status).toLowerCase()}.`, "success");
  refreshAgendaUI();
}

function selectScheduleSlot(button) {
  const date = button.dataset.date || agendaDate;
  const start = button.dataset.start;
  const end = button.dataset.end;
  const form = document.querySelector("#agendaRequestForm");
  if (!form || !start || !end) return;

  agendaRole = "usuario";
  agendaDate = date;
  agendaWeekStart = startOfWeek(agendaDate);
  form.elements.date.value = agendaDate;
  form.elements.start.value = start;
  form.elements.end.value = end;
  refreshAgendaUI();
  const refreshedForm = document.querySelector("#agendaRequestForm");
  if (refreshedForm) {
    refreshedForm.elements.date.value = agendaDate;
    refreshedForm.elements.start.value = start;
    refreshedForm.elements.end.value = end;
    refreshedForm.elements.requester.focus();
  }

  const state = slotStatus(agendaDate, start, end);
  if (state.status === "ocupada") {
    setAgendaMessage("Ese horario ya está ocupado. Puede revisarlo, pero seleccione una hora disponible para enviar una solicitud.", "error");
  } else if (state.status === "pendiente") {
    setAgendaMessage("Ese horario tiene una solicitud pendiente. Puede registrar otra, pero el administrador revisará el cruce.", "warning");
  } else {
    setAgendaMessage("Horario seleccionado. Complete sus datos para enviar la solicitud.", "success");
  }
}

async function setupAgendaTab() {
  if (!document.querySelector(".agenda-module")) return;

  await loadAgendaRequests();
  refreshAgendaUI();

  document.querySelector("#agendaDate")?.addEventListener("change", (event) => {
    agendaDate = event.target.value;
    agendaWeekStart = startOfWeek(agendaDate);
    refreshAgendaUI();
  });

  document.querySelector("#prevWeek")?.addEventListener("click", () => {
    agendaWeekStart = addDays(agendaWeekStart, -7);
    agendaDate = agendaWeekStart;
    refreshAgendaUI();
  });

  document.querySelector("#nextWeek")?.addEventListener("click", () => {
    agendaWeekStart = addDays(agendaWeekStart, 7);
    agendaDate = agendaWeekStart;
    refreshAgendaUI();
  });

  document.querySelector("#todayWeek")?.addEventListener("click", () => {
    agendaDate = formatISODate(new Date());
    agendaWeekStart = startOfWeek(agendaDate);
    refreshAgendaUI();
  });

  document.querySelector("#scheduleRail")?.addEventListener("click", (event) => {
    const dayButton = event.target.closest(".week-day");
    if (dayButton) {
      agendaDate = dayButton.dataset.date;
      agendaWeekStart = startOfWeek(agendaDate);
      refreshAgendaUI();
      return;
    }
    const button = event.target.closest(".schedule-slot");
    if (button) selectScheduleSlot(button);
  });

  document.querySelectorAll("[data-role]").forEach((button) => {
    button.addEventListener("click", () => {
      agendaRole = button.dataset.role;
      refreshAgendaUI();
    });
  });

  document.querySelector("#agendaRequestForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    createAgendaRequest(event.currentTarget);
  });

  document.querySelector("#unlockAdmin")?.addEventListener("click", () => {
    const code = document.querySelector("#adminCode")?.value.trim().toUpperCase();
    agendaAdminUnlocked = code === labAdminCode(lab);
    setAgendaMessage(agendaAdminUnlocked ? "Panel de administrador habilitado." : "Clave incorrecta para este laboratorio.", agendaAdminUnlocked ? "success" : "error");
    refreshAgendaUI();
  });

  document.querySelector("#adminQueue")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-agenda-action]");
    if (button) updateAgendaStatus(button.dataset.requestId, button.dataset.agendaAction);
  });
}

function equipmentSpecs(item) {
  return [
    ["Código", item.codigo || "S/C"],
    ["Marca", item.marca || "Sin dato"],
    ["Modelo", item.modelo || "Sin dato"],
    ["Serie", item.serie || "Sin dato"],
    ["Año de fabricación", item.anio || "Sin dato"],
    ["Cantidad", item.cantidad || "1"],
    ["Estado", item.estado || "Sin estado"],
    ["Ubicación", item.ubicacion || "Sin dato"],
    ["Responsable", item.responsable || "Sin dato"],
    ["Próximo mantenimiento", item.proximo || "No registrado"],
  ];
}

function closeEquipmentModal() {
  const modal = document.querySelector("#equipmentModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openEquipmentModal(index) {
  const item = lab.equipment?.[Number(index)];
  const modal = document.querySelector("#equipmentModal");
  const title = document.querySelector("#equipmentModalTitle");
  const media = document.querySelector("#equipmentModalMedia");
  const specs = document.querySelector("#equipmentModalSpecs");
  if (!item || !modal || !title || !media || !specs) return;

  title.textContent = item.nombre;
  media.innerHTML = item.fotoGrande
    ? `<img src="${escapeHtml(item.fotoGrande)}" alt="${escapeHtml(item.nombre)}" loading="lazy" />`
    : `<div class="equipment-empty-photo">${safetyIcon("equipment")}<span>Foto no disponible</span></div>`;
  specs.innerHTML = equipmentSpecs(item)
    .map(
      ([label, value]) => `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>
      `,
    )
    .join("");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".equipment-close")?.focus();
}

function setupEquipmentModal() {
  const modal = document.querySelector("#equipmentModal");
  if (!modal) return;

  document.querySelector(".inventory-table-wrap")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-equipment-index]");
    if (button) openEquipmentModal(button.dataset.equipmentIndex);
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-equipment-modal]")) closeEquipmentModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeEquipmentModal();
  });
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
      label: "Guías de prácticas",
      title: "Guías de prácticas",
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
      items: lab.maintenance || ["Revisión preventiva trimestral", "Registro de intervenciones", "Alertas de calibración", "Verificación de condiciones de operación"],
      note: lab.maintenance
        ? `Plan de mantenimiento cargado desde la base adjunta. ${lab.maintenance.length} tareas registradas.`
        : "Esta pestaña concentra el plan de mantenimiento preventivo y correctivo del laboratorio.",
    },
    {
      id: "seguridad",
      label: "Requisitos de seguridad",
      title: "Requisitos de seguridad",
      items: getSafetyRequirements(lab),
      note: "Requisitos mínimos de ingreso y permanencia según el tipo de laboratorio, nivel de riesgo y protocolos oficiales.",
    },
    {
      id: "agenda",
      label: "Agenda de espacios",
      title: "Agenda de espacios",
      items: [],
      note: "Solicitudes de uso sujetas a aprobación del responsable del laboratorio. Horario disponible: 07:00-13:00 y 15:00-18:00.",
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
                  <small>${escapeHtml(person.role)}</small>
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
                    ${renderTabItems(tab)}
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
    ${renderEquipmentModal()}
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

  setupAgendaTab();
  setupEquipmentModal();
}

renderCampusNav();
renderLab();
setupCampusMenuBehavior();
