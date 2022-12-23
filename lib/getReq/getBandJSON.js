module.exports = async function getBandJSON() {


  const { apiURL, https } = require("..");

  // Options
  const httpOptions = {
    hostname: apiURL,
    path: '/imaginejs/data/band',
    method: 'GET',
    json: true,
  };

  https.request(httpOptions, (res) => { 
    res.on('data', (message) => console.log(JSON.parse(message)))
  }).end()

}
