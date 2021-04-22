const imaginejs = require('./db.json')

// console.log(imaginejs)

function getNameByID(id) {

    if (id === 0) {
        console.log(imaginejs.songs[0].thunder.title)
    }
}

getNameByID(0)