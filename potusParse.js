const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function(url){
    return rp(url)
        .then(function(html){
            console.log($('.firstHeading', html).text());
            console.log($('.bday', html).text());
        })
        .catch(function(err){
            // handle error
        });
};

module.exports = potusParse;