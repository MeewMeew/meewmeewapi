import MeewMeew from "./Base";

export default class Covid extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @returns Covid info
   */

  public info(): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.ApiURLv2}/covid`, {
        params: {
          apikey: _.apikey,
          version: _.version
        }
      }).then(function ({ data }) {
        return resolve(data);
      }).catch(function (error) {
        return reject(error);
      })
    })
  }
}