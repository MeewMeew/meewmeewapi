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
      let { checkError, writeStream, axios, apiUrl, apikey, version } = this
      return new Promise(function (resolve, reject) {
        axios.get(`${apiUrl}/weather/${location}`, {
          params: {
            apikey: apikey,
            version: version
          }
        }).then(function ({ data }) {
        var response = checkError(data)
        if (path) return writeStream(response.data, path as string, resolve, reject)
        return resolve({
          success: true,
          data: response.data
        })
        }).catch(function (error) {
          reject(error)
        })
      })
    }
}