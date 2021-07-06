const songlist = require('../db/songlist.json')

function getSongLinks(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name].links
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getSongLinks