const imaginejs = require('../lib/index')

imaginejs.indexer.getBandJSON()
  .then((data) => {
    // Do something with the data here
    let band = data.details
    console.log(band)
  })