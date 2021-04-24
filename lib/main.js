const db = require('./db.json')

function getNameByID(id) {
    return db.songs[id].title
}

function getIdByName(name) {

    if (name == "thunder" || name == "Thunder") {
        return db.songs[0].id
    } else if (name == "natural" || name == "Natural") {
        return db.songs[1].id
    } else {
        console.error("Song name doesn't seem to exist");
    }
}

function getAlbumFromID(id) {

    return db.songs[id].album

}

function getAlbumFromName(name) {
    
}

module.exports = { getNameByID, getIdByName, getAlbumFromID };