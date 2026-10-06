import { cp, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("lab.html", "dist/lab.html");
await cp("iq.html", "dist/iq.html");
await cp("iq-malla.html", "dist/iq-malla.html");
await cp("styles.css", "dist/styles.css");
await cp("data.js", "dist/data.js");
await cp("iq-data.js", "dist/iq-data.js");
await cp("iq.js", "dist/iq.js");
await cp("iq-malla.js", "dist/iq-malla.js");
await cp("lab-inventory-overrides.js", "dist/lab-inventory-overrides.js");
await cp("schedule-config.js", "dist/schedule-config.js");
await cp("home.js", "dist/home.js");
await cp("lab.js", "dist/lab.js");
await cp("assets", "dist/assets", { recursive: true });
