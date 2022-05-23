import MeewMeew from "./Base";
import { imageType } from "../types";

export default class Image extends MeewMeew {
  constructor (apikey: string) {
    super(apikey)
  }

  /**
   * 
   * @param imageType 'meow' | 'dog' | 'sexy' | 'girl' | 'boy' | 'wibu'
   * @param path string
   * @returns Promise<ArrayBuffer>
   */

  public random(imageType: imageType, path?: string) {
    let { checkPath, writeFile, checkError, apikey, axios, apiUrl } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/image/${imageType}`, {
        params: {
          apikey: apikey
        }
      }).then(function ({ data }) {
        var check = checkError(data);
        checkPath(path, function (result: any) {
          if (result.isPath === true) {
            writeFile(check.data, path as string, resolve, reject);
          } else {
            resolve(check.data);
          }
        });
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}