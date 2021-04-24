const imaginejs = require('../lib/main.js')
const db = require('../lib/db.json')

// Manual Indexing
// console.log(db.songs[1].title)

// Testing
// console.log(imaginejs.getNameByID(0))
// console.log(imaginejs.getIdByName('Natural'))

console.log(imaginejs.getAlbumFromID(1))