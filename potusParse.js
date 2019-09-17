const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
    .then(function(html){
        console.log($('.firstHeading', html).text());
        console.log($('.bday', html).text());
    })
    .catch(function(err){
        // handle error
    });