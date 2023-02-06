import { apiRequest } from '../util/util.js';

/** Class representing a Collection Indexer*/

/**
 * A Indexer function for Collections within the API
 * @param {*} entry 
 * @returns Object with Values regarding selected Entry
 */
export async function Collection(type, entry) {
    let DATA = await apiRequest('collection', type, entry)

    return DATA
}

// class Collection {
//     constructor() {
//         this.REQUEST = {
//             url: `https://api.unnecessarylibraries.com/imdragons/v1/collection/${type}/${entry}`,
//             statuscode: '202',
//             TargetedCollection: entry
//         },
            
//         this.DATA = DATA
//     }
// }