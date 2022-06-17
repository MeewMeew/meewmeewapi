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
      _.axios.get(`${_.ApiURLv2}/aio`, {
        params: {
          apikey: _.apikey,
          version: _.version,
          url: encodeURIComponent(videoURL),
        }
      }).then(function ({ data }) {
        return resolve(data);
      }).catch(function (error) {
        return reject(error);
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