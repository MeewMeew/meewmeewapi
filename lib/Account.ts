import MeewMeew from "./Base";

export default class Account extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  public info(): Promise<any> {
    var apikey = this.apikey;
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/account`, {
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
}