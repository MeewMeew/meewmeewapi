import MeewMeew from "./Base";

export default class Simsimi extends MeewMeew {
  constructor(apikey: string) {
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
      _.axios.get(`${_.ApiURLv2}/simsimi/chat`, {
        params: {
          ask: encodeURIComponent(text),
          apikey: _.apikey,
          version: _.version
        }
      }).then(function ({ data }) {
        return resolve(data)
      }).catch(function (error) {
        return reject(error);
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
      _.axios.post(`${_.ApiURLv2}/simsimi/teach`, null, {
        params: {
          ask: encodeURIComponent(ask),
          answer: encodeURIComponent(answer),
          apikey: _.apikey,
          version: _.version
        }
      }).then(function ({ data }) {
        return resolve(data)
      }).catch(function (error) {
        return reject(error);
      })
    })
  }
}