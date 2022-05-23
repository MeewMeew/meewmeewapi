import MeewMeew from "./Base";
import { WordLevel } from "../types";

export default class Word extends MeewMeew {
  constructor(apikey: string) {
    super(apikey);
  }

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