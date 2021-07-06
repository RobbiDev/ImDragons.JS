const songlist = require('../db/songlist.json')

function getSongData(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name]
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getSongData