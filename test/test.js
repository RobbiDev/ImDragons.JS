const main = require('../lib/index')
const https = require('node:https')
const http = require('node:http')

main.getBandJSON()
  .then((data) => {
    console.log(data);  // Output: JSON object from API call
  })
  .catch((error) => {
    console.error(error);
});