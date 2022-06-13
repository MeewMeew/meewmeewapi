import { Province } from "../types";
import MeewMeew from "./Base";

export default class Lottery extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param province Province
   * @returns Lottery result todays
   */

  public result(province: Province): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/lottery`, {
        params: {
          province: province,
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