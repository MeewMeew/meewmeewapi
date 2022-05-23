import MeewMeew from "./Base";

export default class Facebook extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  public avatar(userID: string | number, path?: string) {
    let { checkPath, writeFile, axios, apiUrl, apikey } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/avatar/${userID}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        checkPath(path, function (result: any) {
          if (result.isPath === true) {
            writeFile(data, path as string, resolve, reject);
          } else {
            resolve(data);
          }
        });
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}