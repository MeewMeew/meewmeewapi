import MeewMeew from "./Base";

export default class Tiktok extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param url Tiktok url
   * @param path Path to save
   * @returns Stream url to download
   */

  public video(url: string, path?: string) {
    let { checkPath, checkError, writeStream, axios, apiUrl, apikey } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/tiktok/api`, {
        params: {
          apikey: apikey,
          url: url
        }
      }).then(function ({ data }) {
        var response = checkError(data)
        checkPath(path, function (result: any) {
          if (result.isPath === true) {
            writeStream(response.video_url, path as string, resolve, reject);
          } else {
            resolve({
              success: true,
              url: response.video_url
            });
          }
        });
      }).catch(function (error) {
        reject(error);
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
    let { checkPath, checkError, writeStream, axios, apiUrl, apikey } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${apiUrl}/tiktok/api`, {
        params: {
          apikey: apikey,
          url: url
        }
      }).then(function ({ data }) {
        var response = checkError(data)
        checkPath(path, function (result: any) {
          if (result.isPath === true) {
            writeStream(response.music_url, path as string, resolve, reject);
          } else {
            resolve({
              success: true,
              url: response.music_url
            });
          }
        });
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}