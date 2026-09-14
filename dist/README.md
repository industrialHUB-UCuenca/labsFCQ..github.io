# Plataforma Laboratorios FCQ

Prototipo local de la plataforma de laboratorios de la Facultad de Ciencias Químicas de la Universidad de Cuenca.

## Cómo abrirlo

Abre `index.html` en el navegador, o usa la carpeta `dist` si quieres revisar la versión compilada.

## Archivos principales

- `index.html`: estructura de la plataforma.
- `lab.html`: plantilla de subpágina individual de laboratorio.
- `styles.css`: diseño visual y responsive.
- `data.js`: datos de laboratorios y responsables tomados de la matriz.
- `schedule-config.js`: configuración de almacenamiento local de agenda.
- `home.js`: barra de navegación desplegable y mapa sinóptico de portada.
- `lab.js`: contenido de cada ficha individual de laboratorio.
- `claves-administradores-agenda.txt`: claves locales por laboratorio para revisar y editar solicitudes.
- `google-apps-script-agenda.js`: referencia anterior de Apps Script; ya no se usa en la agenda local.
- `assets/banner-fcq.jpg`: imagen principal optimizada para la interfaz.
- `dist`: copia compilada para distribución local.

## Alcance actual

Incluye 36 laboratorios cargados desde la matriz de levantamiento. La página principal muestra un mapa sinóptico por campus y carrera, además de una barra de navegación con laboratorios desplegados por campus. Cada laboratorio se abre en una subpágina con responsables, equipos, plan de mantenimiento, inventario de insumos, PNT y agenda de uso.

## Agenda de espacios

La pestaña `Agenda de espacios` funciona directamente en la página mediante almacenamiento local del navegador. No requiere Google Sheets.

Los horarios se visualizan por bloques: disponible en verde, pendiente en amarillo y ocupada en rojo. Al hacer clic en una hora, el formulario se completa automáticamente con fecha, hora de inicio y hora de fin.

Cada laboratorio tiene una clave local de administrador con formato `ADMI_ACRONIMO##`. El listado está en `claves-administradores-agenda.txt`. Con esa clave se puede revisar cualquier solicitud del laboratorio y cambiar su estado a pendiente, aprobada o negada.

Nota: al ser un prototipo local, las solicitudes se guardan en el navegador donde se registran. Para uso institucional multiusuario hará falta una base de datos o un servicio compartido.
