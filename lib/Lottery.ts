import { Location } from "../types";
import MeewMeew from "./Base";

export default class Lottery extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param location Location
   * @returns Lottery result todays
   */

  public result(location: Location): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/lottery/${location}`, {
        params: {
          apikey: _.apikey,
          location: location
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}