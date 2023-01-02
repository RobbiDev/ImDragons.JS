// Imports
import got from 'got';
import { routes } from '../routing.js';

// Different JSON Data Types
const types = [
    "band",
    "albums",
    "songs",
    "awards,"
]

async function getJSON(type) {

    type = type || 0

    // Check if Type is Vaild then Begin Search
    if (types.includes(type) || type == 0) {

        // URL Constructor
        const url = `${routes.apiURL}${routes.dataID_js}`;

        // Make Request then Return JSON
        const data = await got(url).json();
        return data

    } else {

        return console.log('Error')

    }

}

const json = await getJSON()

/** Class representing a Indexer*/
export class Indexer {

    /**
     * Creates a Indexer that looks for the selected Data Entry 
     * @param {*} type 
     */
    constructor(type) {

        type = type || 0

        if(type == 0) return Object.assign(this, json) 

        if (types.includes(type) == true) {
           Object.assign(this, json[type.toLowerCase()] || json) 
        } else {
            return TypeError(`The Given Data Type of "${type}" doesn't exist`)
        }
        
    }
}