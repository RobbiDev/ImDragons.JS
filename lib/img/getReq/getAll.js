import { request } from 'undici' 

const {
  statusCode,
  headers,
  body
} = await request('https://api.unnecessarylibraries.com/imaginejs/data/band')

export function getAll() {
    console.log('data', body.json())
}