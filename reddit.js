const puppeteer = require('puppeteer');
const url = 'https://www.reddit.com';

puppeteer
    .launch()
    .then(function (browser) {
        return browser.newPage();
    })
    .then(function (page) {
        return page.goto(url).then(function () {
            return page.content();
        });
    })
    .then(function (html) {
        console.log(html);
    })
    .catch(function (err) {
        //handle error
    });