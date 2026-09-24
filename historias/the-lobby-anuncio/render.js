// Renderiza cada historia de index.html a PNG 1080x1920.
// Uso: node render.js   (necesita playwright)
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 2000 } });
  await page.goto('file://' + path.join(__dirname, 'index.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const id of ['s1', 's2', 's3']) {
    const n = id.slice(1).padStart(2, '0');
    await page.locator('#' + id).screenshot({ path: path.join(__dirname, `the-lobby-historia-${n}.png`) });
  }
  await browser.close();
})();
