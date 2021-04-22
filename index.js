const imaginejs = require('./main.js')
const db = require('./lib/db.json')

// Manual Indexing
// console.log(db.songs[1].title)

console.log(imaginejs.getNameByID(0))


console.log(imaginejs.getIdByName('Natural'))
