// Import Imgaine-Dragons.js
import { Collection } from "../lib/index.js"

// Create a New Indexer of Band Data
const indexer = await Collection('album')

// Shows all Band JSON Infomation 
console.log(indexer)