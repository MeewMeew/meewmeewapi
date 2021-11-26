function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

const apiUrl = 'https://meewmeew.info';

module.exports = {
  apiUrl: apiUrl,
  getType: getType
}