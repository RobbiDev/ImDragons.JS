import { apiRequest } from './util.js';

/** Class representing a Collection Indexer*/

/**
 * A Indexer function for Collections within the API
 * @param {*} entry 
 * @returns Object with Values regarding selected Entry
 */
export async function Collection(entry) {
    let DATA = await apiRequest('collection', entry)
    const collection = {
        REQUEST: {
            url: `https://api.unnecessarylibraries.com/imdragons/collection/${entry}`,
            statuscode: '202',
            TargetedCollection: entry
        },
        DATA
    }

    return collection
}