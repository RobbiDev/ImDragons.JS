import { apiRequest } from './util.js';



/** Class representing a Collection Indexer*/
export async function Collection(entry) {
    let DATA = await apiRequest('collection', entry)
    const obj = {
        REQUEST: {
            url: `https://api.unnecessarylibraries.com/imdragons/collection/${entry}`,
            statuscode: '202'
        },
        DATA
    }


    return obj
}