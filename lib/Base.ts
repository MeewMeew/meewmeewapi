import axios from 'axios';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';

import { isValidPath } from './Utils';
import { version } from '../package.json'

class MeewMeew {
  public apikey: string;
  public apiUrl = "http://localhost:80/api/v2";
  public axios = axios;
  public got = got;
  public path = path;
  public version = version;

  constructor(Apikey: string) {
    this.apikey = Apikey;
    this.isValidApikey(this.apikey);
    this.checkUpdate(version);
  }

  public async checkUpdate(version: string) {
    const response = await got.get('https://registry.npmjs.org/-/package/meewmeewapi/dist-tags')
    const data = JSON.parse(response.body);
    if (data.latest !== version) console.info(`meewmeewapi: New version available, please update with "npm install meewmeewapi@${data.latest}"`);
    return;
  }

  public getType(obj: any): string {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  public isValidApikey(apikey: string): boolean {
    if (!apikey) throw new Error('Invalid APIKEY, please check your APIKEY');
    else return true;
  }

  public writeFile(data: any, pathFile: string, resolve: Function, reject: Function): void {
    const basePath = path.resolve(pathFile)
    if (!isValidPath(basePath)) return reject({ error: 'Invalid path', success: false });
    fs.writeFile(basePath, Buffer.from(data), function (error) {
      if (error) return reject({ error: error, success: false });
      return resolve({ path: basePath, success: true });
    })
  }

  public writeStream(url: string, pathFile: string, resolve: any, reject: any): void {
    const basePath = path.resolve(pathFile)
    if (!isValidPath(basePath)) return reject({ error: 'Invalid path', success: false });
    const writer = fs.createWriteStream(basePath);
    got.stream(url).pipe(writer).on('error', (error) => reject({ error: error, success: false }))
    writer.on('finish', () => resolve({ path: basePath, success: true }));
    writer.on('error', (error) => reject({ error: error, success: false }));
  }

  public checkError(data: any): any {
    if (data.error) throw new Error(data.error);
    else return data;
  }

  public get homepage(): string {
    return this.apiUrl + '/site';
  }
}

export default MeewMeew