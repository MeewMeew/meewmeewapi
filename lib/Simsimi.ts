import MeewMeew from "./Base";

export default class Simsimi extends MeewMeew {
  constructor (apikey: string) {
    super(apikey);
  }

  public chat(text: string) {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/simsimi/api`, {
        params: {
          ask: encodeURIComponent(text),
          apikey: _.apikey
        }
      }).then(function ({ data }) {
        let check = _.checkError(data);
        resolve(check);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  public teach(ask: string, answer: string) {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.post(`${_.apiUrl}/simsimi/teach`, {
        params: {
          ask: encodeURIComponent(ask),
          answer: encodeURIComponent(answer),
          apikey: _.apikey
        }
      }).then(function ({ data }) {
        let check = _.checkError(data);
        resolve(check);
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}