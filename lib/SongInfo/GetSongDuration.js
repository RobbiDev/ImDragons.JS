const songlist = require('../db/songlist.json')

function getSongDuration(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name].duration
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getSongDuration