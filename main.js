const imaginejs = require('./lib/db.json')

function getNameByID(id) {
    return imaginejs.songs[id].title
}

function getIdByName(name) {

    if (name.toLowerCase() == "thunder") {
        return imaginejs.songs[0].id
    } else if (name.toLowerCase() == "natural") {
        return imaginejs.songs[1].id
    } else {
        console.error("Song name doesn't seem to exist");
    }
}

module.exports = { getNameByID, getIdByName };