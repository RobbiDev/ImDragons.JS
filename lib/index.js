'use strict';

// Loading all functions
module.exports = {

    // Main
    getAlbumData: require('./albumInfo/getAlbumData'),
    getSongData: require('./SongInfo/getSongData'),

    // Song Functions
    getSongLinks: require('./SongInfo/getSongLinks'),
    getSongGenre: require('./SongInfo/getSongGenre'),
    getSongReleased: require('./SongInfo/getSongReleased'),
    getSongDuration: require('./SongInfo/getSongDuration'),

    // Album Functions
    getAlbumName: require('./albumInfo/getAlbumName')
}