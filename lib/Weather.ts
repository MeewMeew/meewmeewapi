import MeewMeew from "./Base";

export default class Weather extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param location Location
   * @param path path to save
   * @returns Promise<any>
   */

  public image(location: string, path: string) {
    let { writeStream, axios, ApiURLv2, apikey, version } = this
    return new Promise(function (resolve, reject) {
      axios.get(`${ApiURLv2}/weather`, {
        params: {
          location: encodeURI(location),
          apikey: apikey,
          version: version
        }
      }).then(function ({ data }) {
        if (path && data.success) return writeStream(data.data, path as string, resolve, reject)
        return resolve(!data.success ? data : {
          success: true,
          data: data.data
        })
      }).catch(function (error) {
        return reject(error)
      })
    })
  }
}