import MeewMeew from "./Base";
import { imageType } from "../types";

export default class Image extends MeewMeew {
  constructor (apikey: string) {
    super(apikey)
  }

  /**
   * 
   * @param imageType 'meow' | 'dog' | 'sexy' | 'girl' | 'boy' | 'wibu' | 'cosplay
   * @param path string
   * @returns Promise<ArrayBuffer>
   */

  public random(imageType: imageType, path?: string) {
    let { writeFile, checkError, apikey, axios, apiUrl } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/image/${imageType}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        var check = checkError(data)
        if (path) return writeFile(check.data, path as string, resolve, reject);
        return resolve(check.data)
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}