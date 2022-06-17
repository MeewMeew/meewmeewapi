import MeewMeew from "./Base";
import FormData from "form-data";

export default class Facebook extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param userID Facebook ID
   * @param path path to save image
   * @returns Buffer | undefined
   */

  public avatar(userID: string | number, path?: string) {
    let { writeFile, axios, ApiURLv2, apikey, version } = this;
    return new Promise(function (resolve, reject) {
      axios.get(`${ApiURLv2}/avatar`, {
        params: {
          id: userID,
          apikey: apikey,
          version: version
        }
      }).then(function ({ data }) {
        if (path && data.success) return writeFile(data.data, path as string, resolve, reject);
        return resolve(data);
      }).catch(function (error) {
        return reject(error);
      })
    })
  }

  /**
   * 
   * @param url Profile facebook url
   * @param fcaApi API from Facebook chat api
   * @returns [uid, isValid]
   */

  public uid(url: string, fcaApi?: any) {
    const urlData = new URL(url)
    const regex = /.+id=(\d+)$/i
    var _ = this
    return new Promise(async function (resolve) {
      if (!isNaN(url as any)) return resolve([url, true])
      if (regex.test(url)) return resolve([regex.exec(url)![1], true])
      var form = new FormData()
      form.append('link', urlData.href)
      var { body } = await _.got.post('https://id.traodoisub.com/api.php', { body: form })
      var id = JSON.parse(body).id
      if (id) return resolve([id, true])
      if (fcaApi) {
        var data = await fcaApi.httpGet(url)
        id = (data.split('"userID":"')[1] || '",').split('",')[0] || undefined
        if (id) return resolve([id, true])
        else return resolve([undefined, false])
      }
      return resolve([undefined, false])
    })
  }
}