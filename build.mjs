import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("lab.html", "dist/lab.html");
await cp("styles.css", "dist/styles.css");
await cp("data.js", "dist/data.js");
await cp("home.js", "dist/home.js");
await cp("lab.js", "dist/lab.js");
await cp("assets", "dist/assets", { recursive: true });
