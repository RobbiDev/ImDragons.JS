// Imports
import got from 'got';

// Config
const routes = {

    apiDomain: `api.unnecessarylibraries.com`,
    apiURL: `https://api.unnecessarylibraries.com`,

    // ImDragonsAPI API Endpoint's
    mainID_js: `/imdragons`,

    // Directory Routes
    collection: "/imdragons/collection",
    individual: "/imdragons/individual",

    // Public Endpoints
    endpoints: {
        collection: ['album', 'info'],
        individual: ['thunder']
    }

}

// API Request Builder
export async function apiRequest(type, entry) {

    if (routes.endpoints.collection.includes(entry) == false) return TypeError(`${entry} Is not a valid entry within ${type}`)

    // Check if Type is Vaild then Begin Search
    if (type == "collection") {
        // URL Constructor
        const url = `${routes.apiURL}${routes.collection}/${entry}`;
        console.log(url)

        // Make Request then Return JSON
        const data = await got(url).json();
        return data
    }

    if (type == "individuals") {
        // URL Constructor
        const url = `${routes.apiURL}/ImDragons/${routes.individual}/${entry}`;

        // Make Request then Return JSON
        const data = await got(url).json();
        return data
    } else {
        return TypeError('Error')
    }

}