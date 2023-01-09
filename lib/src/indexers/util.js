// Imports
import got from 'got';
import { routes } from '../routing.js';

/**
 * 
 * @param {*} entry 
 * @returns 
 */
export async function apiRequest(type, entry) {

    // Check if Type is Vaild then Begin Search
    if (type == "collection") {
        // URL Constructor
        const url = `${routes.apiURL}${routes.entries.collections}/${entry}`;
        console.log(url)

        // Make Request then Return JSON
        const data = await got(url).json();
        return data
    } else if (type == "individuals") {
        // URL Constructor
        const url = `${routes.apiURL}/ImDragons/${routes.entries.individuals}/${entry}`;

        // Make Request then Return JSON
        const data = await got(url).json();
        return data
    } else {
        return console.log('Error')
    }

}