import MeewMeew from "./Base";
import { WordLevel } from "../types";

export default class Word extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

  /**
   * 
   * @param text string
   * @param lang vi | en
   * @returns Object<{success: boolean, data: string}>
   */

  public linkWord(text: string, lang?: string): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/word/link`, {
        params: {
          apikey: _.apikey,
          text: text,
          lang: lang
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
   * @param level string
   * @returns Object<{correct: string, random: Array<string>}>
   */

  public sortWord(level: WordLevel = 'random'): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.apiUrl}/word/rw`, {
        params: {
          level: level,
          apikey: _.apikey
        }
      }).then(function ({ data }) {
        let check = _.checkError(data);
        resolve(check);
      }).catch(function (error) {
        reject(error);
      })
    })
  }
}