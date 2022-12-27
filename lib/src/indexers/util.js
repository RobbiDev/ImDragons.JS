// Imports
const https = require('https');
const main = require('../../index')

// HTTP Options Constructor
const httpOptions = {
  hostname: main.apiDomain,
  path: main.bandID_js,
};

/**
 * A Function to lets you have access all of our Infomation regarding the band
 * @returns A JSON object for band
 */
const getBandJSON = () => {
  return new Promise((resolve, reject) => {
    https.get(httpOptions, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = {
  getBandJSON,
}

