const imaginejs = require('./getTitleByID.js')
const db = require('./db.json')

// Manual Indexing
// console.log(db.songs[1].title)

console.log(imaginejs.getNameByID(0))

