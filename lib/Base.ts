import { getType, apiUrl } from './utils';
import axios, { AxiosInstance } from 'axios';
import fs from 'fs-extra';

class MeewMeew {
    public apikey: string;
    public apiUrl: string;
    public axios: AxiosInstance;

    constructor(Apikey: string) {
        this.apikey = Apikey;
        this.axios = axios;
        this.apiUrl = apiUrl;
    }
    
    public writeFile(data: any, path: string, resolve: Function, reject: Function) {
        fs.writeFile(path, Buffer.from(data), function (error) {
            if (error) {
                reject(error);
            } else {
                resolve('success');
            }
        })
    }

    public checkPath(path: any, callback: Function) {
        let pathType = getType(path);
        switch (pathType) {
            case 'String':
                callback({ isPath: true as boolean, });
                break;
            case 'Undefined':
                callback({ isPath: false as boolean });
                break;
            default:
                throw new Error('Invalid argument');
        }
    }

    public checkError(data: any): any {
        if (data.error) {
            throw new Error(data.error);
        } else {
            return data;
        }
    }

    public writeStream (url: string, path: string, resolve: Function, reject: Function) {
        let writer = fs.createWriteStream(path);
        axios.get(url, {
            responseType: 'stream'
        }).then(function (response) {
            response.data.pipe(writer);
            writer.on('finish', function () {
                resolve('success');
            });
            writer.on('error', function (error) {
                reject(error);
            });
        }).catch(function (error) {
            reject(error);
        })
    }
}

export default MeewMeew