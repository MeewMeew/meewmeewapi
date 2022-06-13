import MeewMeew from "./Base"

export default class Aio extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param videoURL All url of video
   * @returns Promise<any>
   */
  public listURL(videoURL: string): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/aio`, {
        params: {
          apikey: _.apikey,
          version: _.version,
          url: encodeURIComponent(videoURL),
        }
      }).then(function ({ data }) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      })
    })
  }

  /**
   * 
   * @param downloadURL DownloadURL in list of response from listURL
   * @param pathFile Path to save
   * @returns Promise<any>
   */

  public download(downloadURL: string, pathFile: string): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      if (pathFile) return _.writeStream(downloadURL, pathFile, resolve, reject);
      else return resolve(downloadURL);
    })
  }
}