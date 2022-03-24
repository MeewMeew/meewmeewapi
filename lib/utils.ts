export const apiUrl = 'https://meewmeew.herokuapp.com';
export const getType = function getType(obj: any): string {
    return Object.prototype.toString.call(obj).slice(8, -1);
};