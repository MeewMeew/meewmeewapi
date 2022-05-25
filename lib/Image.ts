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
    let { writeFile, checkError, apikey, axios, apiUrl, isInvalidPath } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/image/${imageType}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        var check = checkError(data)
        if (!isInvalidPath(path as string, { file: true })) return reject(new Error('Invalid path: ' + path))
        writeFile(check.data, path as string, resolve, reject);
        return;
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}