import MeewMeew from "./Base";
import { imageType } from "../types";

export default class Image extends MeewMeew {
  constructor(apikey: string) {
    super(apikey)
  }

  /**
   * 
   * @param imageType 'meow' | 'dog' | 'sexy' | 'girl' | 'boy' | 'wibu' | 'cosplay'
   * @param path string
   * @returns Promise<ArrayBuffer>
   */

  public random(imageType: imageType, path?: string) {
    let { writeFile, apikey, axios, ApiURLv2, version } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${ApiURLv2}/image`, {
        params: {
          type: imageType,
          apikey: apikey,
          version: version
        }
      }).then(function ({ data }) {
        if (path && data.success) return writeFile(data.data, path as string, resolve, reject);
        return resolve(data)
      }).catch(function (error) {
        return reject(error);
      })
    })
  }
}