// Import Imgaine-Dragons.js
import { Collection } from "../lib/index.js"

// Create a New Collection indexer for the band info Data
const indexer = await Collection("list", "album")

// Shows all Band JSON Infomation 
console.log(indexer)