import MeewMeew from "./Base";

export default class Tiktok extends MeewMeew {
  constructor(apikey: string) {
    super(apikey)
  }

  /**
   * 
   * @param url Tiktok url
   * @param path Path to save
   * @returns Stream url to download
   */

  public video(url: string, path?: string) {
    let { checkError, writeStream, axios, apiUrl, apikey } = this
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/tiktok/api`, {
        params: {
          apikey: apikey,
          url: url
        }
      }).then(function ({ data }) {
        var response = checkError(data)
        if (path) return writeStream(response.video_url, path as string, resolve, reject)
        return resolve({
          success: true,
          data: response.video_url
        })
      }).catch(function (error) {
        reject(error)
      })
    })
  }

  /**
 * 
 * @param url Tiktok url
 * @param path Path to save
 * @returns Stream url to download
 */

  public audio(url: string, path?: string) {
    let { checkError, writeStream, axios, apiUrl, apikey } = this
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/tiktok/api`, {
        params: {
          apikey: apikey,
          url: url
        }
      }).then(function ({ data }) {
        var response = checkError(data)
        if (path) return writeStream(response.audio_url, path as string, resolve, reject)
        return resolve({
          success: true,
          data: response.audio_url
        })
      }).catch(function (error) {
        reject(error)
      })
    })
  }
}