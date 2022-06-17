import MeewMeew from "./Base";
import { WordLevel } from "../types";

export type linkWordLanguage = 'vi' | 'en'

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

  public linkWord(text: string, lang: linkWordLanguage = 'vi'): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.ApiURLv2}/word/linkword`, {
        params: {
          ask: text,
          lang: lang,
          apikey: _.apikey,
          version: _.version
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
   * @param level string
   * @returns Object<{correct: string, random: Array<string>}>
   */

  public sortWord(level: WordLevel = 'random'): Promise<any> {
    var _ = this;
    return new Promise(function (resolve, reject) {
      _.axios.get(`${_.ApiURLv2}/word/random`, {
        params: {
          level: level,
          apikey: _.apikey,
          version: _.version
        }
      }).then(function ({ data }) {
        return resolve(data);
      }).catch(function (error) {
        return reject(error);
      })
    })
  }
}