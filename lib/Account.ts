import MeewMeew from "./Base";

export default class Account extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @returns Account info
   */

  public info(): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/account`, {
        params: {
          apikey: _.apikey,
          version: _.version
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}