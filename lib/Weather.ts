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
      let { checkError, writeStream, axios, apiUrl, apikey, isInvalidPath } = this
      return new Promise(function (resolve, reject) {
        axios.get(`${apiUrl}/weather/${location}`, {
          params: {
            apikey: apikey
          }
        }).then(function ({ data }) {
          var response = checkError(data)
          if (!isInvalidPath(path, { file: true })) return reject(new Error('Invalid path: ' + path))
          writeStream(response.data, path, resolve, reject)
          return
        }).catch(function (error) {
          reject(error)
        })
      })
    }
}