import { getType, apiUrl } from './utils';
import axios from 'axios';
import { writeFile as _writeFile } from 'fs-extra';
import { MeewMeewInterface, Level, Location } from '../types/meewmeew';

class MeewMeew implements MeewMeewInterface {
    private apikey: string;

    constructor(Apikey: string) {
        this.apikey = Apikey;
    }
    
    private writeFile(data: any, path: string, resolve: Function, reject: Function) {
        _writeFile(path, Buffer.from(data), function (error) {
            if (error) {
                reject(error);
            } else {
                resolve('success');
            }
        })
    }

    private checkPath(path: any, callback: Function) {
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

    private checkError(data: any): any {
        if (data.error) {
            throw new Error(data.error);
        } else {
            return data;
        }
    }
    /**
     * @returns {Promise<any>}
     */

    public accountInfo(): Promise<any> {
        var apikey = this.apikey;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/account/info`, {
                params: {
                    apikey: apikey
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
     * @returns {Promise<any>}
     */

    public covidInfo(): Promise<any> {
        var apikey = this.apikey;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/covid`, {
                params: {
                    apikey: apikey
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
     * @param imageType string
     * @param path string | undefined
     * @returns {Promise<any>}
     */

    public randomImage(imageType: string, path?: string): Promise<any> {
        let { checkPath, writeFile, checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/image/${imageType}`, {
                params: {
                    apikey: apikey
                }
            }).then(function ({ data }) {
                var check = checkError(data);
                checkPath(path, function (result: any) {
                    if (result.isPath === true) {
                        writeFile(check.data, path as string, resolve, reject);
                    } else {
                        resolve(check.data);
                    }
                });
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    /**
     * 
     * @param userId string | number
     * @param path string | undefined
     * @returns {Promise<any>}
     */

    public facebookAvatar(userId: string | number, path?: string): Promise<any> {
        var apikey = this.apikey;
        let { checkPath, writeFile } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/avatar/${userId}`, {
                params: {
                    apikey: apikey
                }
            }).then(function ({ data }) {
                checkPath(path, function (result: any) {
                    if (result.isPath === true) {
                        writeFile(data, path as string, resolve, reject);
                    } else {
                        resolve(data);
                    }
                });
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    /**
     * 
     * @param tiktokUrl string
     * @returns {Promise<any>}
     */

    public tiktokVideoNoWatermark(tiktokUrl: string): Promise<any> {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/tiktok/api`, {
                params: {
                    url: encodeURIComponent(tiktokUrl),
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    /**
     * 
     * @param text string
     * @param lang 'vi' | 'en'
     * @returns {Promise<any>}
     */

    public linkWord(text: string, lang: string = 'vi'): Promise<any> {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/word/linkword`, {
                params: {
                    ask: encodeURIComponent(text),
                    lang: lang,
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    /**
     * 
     * @param level string
     * @returns {Promise<any>}
     */

    public arrangeWord(level: Level = 'random'): Promise<any> {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/word/rw`, {
                params: {
                    level: level,
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    /**
     * 
     * @param askText string
     * @returns {Promise<any>}
     */

    public chatWithSimsimi(askText: string) {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/simsimi/api`, {
                params: {
                    ask: encodeURIComponent(askText),
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    public teachSimsimi(ask: string | number, answer: string | number) {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.post(`${apiUrl}/simsimi/teach`, {
                params: {
                    ask: encodeURIComponent(ask),
                    answer: encodeURIComponent(answer),
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }

    public lotteryToday(location = 'all') {
        var { checkError, apikey } = this;
        return new Promise(function (resolve, reject) {
            axios.get(`${apiUrl}/lottery/${location as string}`, {
                params: {
                    apikey: apikey
                }
            }).then(function ({ data }) {
                let check = checkError(data);
                resolve(check);
            }).catch(function (error) {
                reject(error);
            })
        })
    }
}

export default MeewMeew