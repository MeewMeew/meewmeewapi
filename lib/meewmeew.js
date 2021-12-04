const axios = require('axios');
const utils = require('./utils');

class MeewMeew {
  constructor(apikey) {
    this.apikey = apikey;
  }

  accountInfo() {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/account/info`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  covidInfo() {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/covid`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  randomImage(imageType) {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/image/${imageType}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  facebookAvatar(userId) {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/avatar/${userId}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  tiktokVideoNoWatermark(tiktokUrl) {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/tiktok/api`, {
        params: {
          url: encodeURIComponent(tiktokUrl),
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  linkWord(text, lang = 'vi') {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/word/linkword`, {
        params: {
          ask: encodeURIComponent(text),
          lang: lang,
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  arrangeWord(level = 'random') {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/word/rw`, {
        params: {
          level: level,
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  chatWithSimsimi(askText) {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.get(`${utils.apiUrl}/simsimi/api`, {
        params: {
          ask: encodeURIComponent(askText),
          apikey: apikey
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  teachSimsimi(ask, answer) {
    var apikey = this.apikey;
    return new Promise(function (resolve, reject) {
      axios.default.post(`${utils.apiUrl}/simsimi/teach?apikey=${apikey}`, {
        data: {
          ask: ask,
          answer: answer
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}

module.exports = { MeewMeew };