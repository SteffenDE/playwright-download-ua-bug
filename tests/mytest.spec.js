const { test, expect } = require('@playwright/test');

test("sets correct user agent for download", async ({ browser }) => {
    const context = await browser.newContext({ userAgent: "MyCustomUA" });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:8080");
    await page.click("#download");
});
