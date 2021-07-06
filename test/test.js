const imaginejs = require('../lib/index.js')
const db = require('../lib/db/songlist.json')
const band = require('../lib/db/band.json')
const main = require('../lib/index.js')

var album = main.getSongData("Believer")

console.log(album)