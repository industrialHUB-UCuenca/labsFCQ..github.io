# Plataforma Laboratorios FCQ

Prototipo local de la plataforma de laboratorios de la Facultad de Ciencias Quimicas de la Universidad de Cuenca.

## Como abrirlo

Abre `index.html` en el navegador, o usa la carpeta `dist` si quieres revisar la version compilada.

## Archivos principales

- `index.html`: estructura de la plataforma.
- `lab.html`: plantilla de subpagina individual de laboratorio.
- `styles.css`: diseno visual y responsive.
- `data.js`: datos de laboratorios y responsables tomados de la matriz.
- `home.js`: barra de navegacion desplegable y resumen de portada.
- `lab.js`: contenido de cada ficha individual de laboratorio.
- `assets/fcq-labs-visual.png`: imagen generada para la interfaz.
- `dist`: copia compilada para distribucion local.

## Alcance actual

Incluye 35 laboratorios cargados desde la matriz de levantamiento. La pagina principal muestra una descripcion general y una barra de navegacion con laboratorios desplegados por campus. Cada laboratorio se abre en una subpagina con responsables, equipos, plan de mantenimiento, inventario de insumos, PNT y agenda de uso.
