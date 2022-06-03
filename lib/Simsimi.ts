import MeewMeew from "./Base";

export default class Simsimi extends MeewMeew {
  constructor (apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param text string
   * @returns Object<{ success: boolean, msg: string }>
   */

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

  /**
   * 
   * @param ask string
   * @param answer string
   * @returns Object<{ success: boolean, msg: string }>
   */

  public teach(ask: string, answer: string) {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.post(`${_.apiUrl}/simsimi/teach`, null, {
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