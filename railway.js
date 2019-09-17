const puppeteer = require('puppeteer');

puppeteer.launch(headless = false).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://enquiry.indianrail.gov.in/ntes/index.html');
    // other actions...
    const [response] = await Promise.all([
        page.waitForNavigation(waitOptions),
        page.click('ui-id-3', clickOptions),
    ]);
    await browser.close();
});