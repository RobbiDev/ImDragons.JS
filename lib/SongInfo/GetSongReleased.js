const songlist = require('../db/songlist.json')

function getSongReleased(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name].released
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getSongReleased