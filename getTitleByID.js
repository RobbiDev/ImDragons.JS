const imaginejs = require('./db.json')

function getNameByID(id) {
    return imaginejs.songs[id].title
}

module.exports = { getNameByID };