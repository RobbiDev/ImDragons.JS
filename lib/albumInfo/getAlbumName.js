const songlist = require('../db/songlist.json')

function getAlbumName(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name].album
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getAlbumName