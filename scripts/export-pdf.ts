import puppeteer from "puppeteer";
import { execSync, spawn, ChildProcess } from "child_process";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.join(process.cwd(), "output");
const OUTPUT_FILE = process.argv.includes("--output")
  ? process.argv[process.argv.indexOf("--output") + 1]
  : path.join(OUTPUT_DIR, "portfolio.pdf");

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

async function isServerRunning(): Promise<boolean> {
  try {
    const res = await fetch(URL);
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForServer(maxWait = 30000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    if (await isServerRunning()) return;
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start within ${maxWait}ms`);
}

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let serverProcess: ChildProcess | null = null;
  const serverAlreadyRunning = await isServerRunning();

  if (!serverAlreadyRunning) {
    console.log("Starting Next.js server...");
    serverProcess = spawn("npm", ["run", "dev"], {
      stdio: "pipe",
      cwd: process.cwd(),
    });
    await waitForServer();
    console.log("Server started.");
  } else {
    console.log("Server already running.");
  }

  try {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--font-render-hinting=none",
      ],
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    console.log("Navigating to portfolio...");
    await page.goto(URL, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);
    console.log("Fonts loaded.");

    // Small delay for rendering to settle
    await new Promise((r) => setTimeout(r, 1000));

    console.log("Generating PDF...");
    await page.pdf({
      path: OUTPUT_FILE,
      width: "210mm",
      height: "297mm",
      printBackground: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
      preferCSSPageSize: false,
      displayHeaderFooter: false,
    });

    console.log(`PDF saved to: ${OUTPUT_FILE}`);

    const stats = fs.statSync(OUTPUT_FILE);
    console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    await browser.close();
  } finally {
    if (serverProcess) {
      serverProcess.kill();
      console.log("Server stopped.");
    }
  }
}

main().catch((err) => {
  console.error("PDF export failed:", err);
  process.exit(1);
});
