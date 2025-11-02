const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://bitheap.tech');
    await page.screenshot({ path: './screenshots/bitheap.png' });
    await browser.close();
})();