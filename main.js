const imaginejs = require('./lib/db.json')

function getNameByID(id) {
    return imaginejs.songs[id].title
}

function getIdByName(name) {

    if (name == "thunder" || name == "Thunder") {
        return imaginejs.songs[0].id
    } else if (name == "natural" || name == "Natural") {
        return imaginejs.songs[1].id
    } else {
        console.error("Song name doesn't seem to exist");
    }
}

module.exports = { getNameByID, getIdByName };