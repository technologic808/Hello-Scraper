const rp = require('request-promise');
const url = 'https://www.reddit.com';

rp(url)
    .then(function (html) {
        //success!
        console.log(html);
    })
    .catch(function (err) {
        //handle error
    });