const { MeewMeew } = require('.');
const fs = require('fs-extra');

var meewmeew = new MeewMeew('YOUR_APIKEY_HERE');  // Get your free API key at https://meewmeew.info/site

// Get account information
meewmeew
    .accountInfo()
    .then(data => console.log('Account Information:', data))
    .catch(error => console.error(error));

// Get covid information
meewmeew
    .covidInfo()
    .then(data => console.log('Covid Information:', data))
    .catch(error => console.error(error));

// Get random image
meewmeew
    .randomImage('meow')
    .then(data => {
        if (data.error) return console.log(data.error);
        fs.writeFileSync("./meow.jpg", Buffer.from(data.data));
    })
    .catch(error => console.error(error))
