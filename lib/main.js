// Require JSON Database
const db = require('./db.json')

// Functions that use ID's
function getNameByID(id) {
    
    try {
        return db.songlist[id].title
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

function getAlbumFromID(id) { 
    
    try {
        return db.songlist[id].album
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

function getReleasedByID(id) {

    try {
        return db.songlist[id].released
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

function getGenreByID(id) {

    try {
        return db.songlist[id].genre
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

function getDurationByID(id) {

    try {
        return db.songlist[id].duration
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}


function getLinksByID(id) {

    try {
        return db.songlist[id].links
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

// Functions that use name searching
function getIdByName(name) {

    var result = name.toLowerCase()

    if (result === "thunder") {
        return db.songlist[0].id
    } else if (result == "natural") {
        return db.songlist[1].id
    } else {
        return TypeError(`Song name is incorrect or doesn't exist`)
    }
}


function getAlbumFromName(name) {

    if (name == "thunder" || name == "Thunder") {
        return db.songlist[0].album
    } else if (name == "natural" || name == "Natural") {
        return db.songlist[1].album
    } else {
        return TypeError(`Song name is incorrect or doesn't exist`)
    }

}



module.exports = { getNameByID, getIdByName, getAlbumFromName, getAlbumFromID, getReleasedByID, getGenreByID, getDurationByID, getLinksByID };