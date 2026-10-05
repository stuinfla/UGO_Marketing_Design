// Render tools/web/guide.html to release/U-GO-AI-Guide.pdf (A4, brand fonts embedded).
//   node tools/build_guide.mjs        (needs Playwright with Chromium)
// The PDF is committed, so the Netlify build doesn't need a browser.
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let chromium;
try { ({ chromium } = await import("playwright")); }
catch { ({ chromium } = await import("/opt/node-tools/node_modules/playwright/index.mjs")); }

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(root, "tools/web/guide.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
const out = path.join(root, "release/U-GO-AI-Guide.pdf");
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("wrote", path.relative(root, out));
