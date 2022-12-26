/**
 * getJSON:  RESTful GET request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

const https = require('node:https')

module.exports = function getBandJSON() {

  const options = {
    hostname: 'api.unnecessarylibraries.com',
    path: '/imaginejs/data/band',
    method: 'GET'
  };

  return new Promise((resolve, reject) => {
    https.request(options, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (e) => {
      reject(e);
    }).end()
  });
};