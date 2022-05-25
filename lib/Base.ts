import axios from 'axios';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';

import { isInvalidPath } from './Utils';

class MeewMeew {
  public apikey: string;
  public apiUrl = "https://meewmeew.herokuapp.com";
  public axios = axios;
  public got = got;
  public path = path;

  constructor(Apikey: string) {
    this.apikey = Apikey;
    this.isValidApikey(this.apikey);
  }

  public getType(obj: any): string {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  public isValidApikey(apikey: string): boolean {
    if (!apikey) throw new Error('Invalid APIKEY, please check your APIKEY');
    else return true;
  }

  

  public writeFile(data: any, pathFile: string, resolve: Function, reject: Function): void {
    const parsePath = path.parse(path.resolve(pathFile));
    const basePath = `${parsePath.dir}${parsePath.base}`;
    if (isInvalidPath(basePath)) return reject({ error: 'Invalid path', success: false });
    fs.writeFile(basePath, Buffer.from(data), function (error) {
      if (error) {
        reject({ error: error, success: false });
      } else {
        resolve({ path: basePath, success: true });
      }
    })
  }

  public writeStream(url: string, pathFile: string, resolve: Function, reject: Function): void {
    const basePath = path.resolve(pathFile)
    console.log(basePath)
    if (isInvalidPath(basePath)) return reject({ error: 'Invalid path', success: false });
    const writer = fs.createWriteStream(basePath);
    axios.get(url, { responseType: 'stream' }).then(function (response) {
      response.data.pipe(writer);
      writer.on('finish', function () {
        resolve({ path: basePath, success: true });
      });
      writer.on('error', function (error) {
        reject({ error: error, success: false });
      });
    }).catch(function (error) {
      reject({ error: error, success: false });
    })
  }

  public checkError(data: any): any {
    if (data.error) throw new Error(data.error);
    else return data;
  }
}

export default MeewMeew