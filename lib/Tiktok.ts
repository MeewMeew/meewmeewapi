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
    let { writeStream, axios, ApiURLv2, apikey, version } = this
    return new Promise(function (resolve, reject) {
      axios.get(`${ApiURLv2}/tiktok`, {
        params: {
          url: url,
          apikey: apikey,
          version: version
        }
      }).then(function ({ data }) {
        if (path && data.success) return writeStream(data.video_url, path as string, resolve, reject)
        return resolve(!data.success ? data : {
          success: true,
          data: data.video_url
        })
      }).catch(function (error) {
        return reject(error)
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
    let { writeStream, axios, ApiURLv2, apikey, version } = this
    return new Promise(function (resolve, reject) {
      axios.get(`${ApiURLv2}/tiktok`, {
        params: {
          url: url,
          apikey: apikey,
          version: version
        }
      }).then(function ({ data }) {
        if (path && data.success) return writeStream(data.audio_url, path as string, resolve, reject)
        return resolve(!data.success ? data : {
          success: true,
          data: data.audio_url
        })
      }).catch(function (error) {
        return reject(error)
      })
    })
  }
}