const imaginejs = require('../lib/main.js')
const db = require('../lib/db.json')

var link = imaginejs.getLinksByID(0)

console.log(link.spotify)