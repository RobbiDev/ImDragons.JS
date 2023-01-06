import { createJSON } from './util.js';

/** Class representing a Collection Indexer*/
export class Collection {

    constructor(entry) {

        async function appendJSON() {

            let json = await createJSON('collection', entry)

        }

        
        let json = appendJSON()
        console.log(json)
        return Object.assign(this, json)

    }
}