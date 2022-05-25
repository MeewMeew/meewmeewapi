import axios from 'axios';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';

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

  public isInvalidPath(filePath: string, options: any = {}): boolean {
    const MAX_PATH = options.extended ? 32767 : 260;
    const isWindows = (opts: any = {}) => process.platform !== 'win32' || opts.windows === true;
    if (filePath === '' || typeof filePath !== 'string') return true;
    if (!isWindows(options)) return true;
    if (typeof filePath !== 'string' || filePath.length > (MAX_PATH - 12)) return true;
    const rootPath = this.path.parse(filePath).root;
    if (rootPath) filePath = filePath.slice(rootPath.length);
    if (options.file) return /[<>:"/\\|?*]/.test(filePath);
    return /[<>:"|?*]/.test(filePath);
  }

  public writeFile(data: any, path: string, resolve: Function, reject: Function): void {
    fs.writeFile(path, Buffer.from(data), function (error) {
      if (error) {
        reject({ error: error, success: false });
      } else {
        resolve({ path: path, success: true });
      }
    })
  }

  public writeStream(url: string, path: string, resolve: Function, reject: Function): void {
    const writer = fs.createWriteStream(path);
    axios.get(url, { responseType: 'stream' }).then(function (response) {
      response.data.pipe(writer);
      writer.on('finish', function () {
        resolve({ path: path, success: true });
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