<img src="https://github.com/EchoGronkowski/imagine-dragons.js/blob/main/img/imaginejs.png" alt="logo">

<p align="center">
   <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"><img alt="GitHub" src="https://img.shields.io/github/license/echogronkowski/imagine-dragons.js"></a>
   <a href="https://www.npmjs.com/package/imagine-dragons.js"><img src="https://img.shields.io/npm/v/imagine-dragons.js" alt="NPM package"></a>
   <a href="https://github.com/EchoGronkowski/imagine-dragons.js"><img src="https://img.shields.io/badge/state-pre--release-yellow" alt="state"></a>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#compatible-with">Compatible With</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

# About

An open-source JSON Database Wrapper for all types of information regarding the band of Imagine Dragons.

This Project was created for people that love Imagine Dragons. This project was also aimed at people who don't feel like spending hours and hours searching for information on all things Imagine Dragons. So, I've created a simple Node.js JSON Wrapper full of information regarding Imagine Dragons. Hope you enjoy my first big project!

IMPORTANT: This project is still in development and unstable \
IMPORTANT: We are in no way connected to Imagine Dragons nor do we represent them

# Prerequisites

- [node.js](https://nodejs.org/en/download/current/)

# Installation

With node.js simply run the following commands

```bash
# Run this to install imagine-dragons.js locally to your repository. 
$ npm install imagine-dragons.js --save

# Run this instead to install imagine-dragons.js globally so you can use it anywhere.
$ npm install imagine-dragons.js -g
```

Boom, Thats it!

# Documentation

In Development

# Example

This exmaple is pretty simple. Simply set the ```name``` of parameter in ```getAlbumFromName(name)``` to output a string named ```Evolve```.

```javascript
// Imports imagine-dragons.js package
const imaginejs = require('imagine-dragons.js')

// Gives the name of the album 
var album = imaginejs.getAlbumFromName('Thunder')

// Outputs the Album name
console.log(album)
```

## Output

```shell
Evolve 
```

The output would return a string called ```Evolve```

# Compatible With

- [Discord.js](https://github.com/discordjs/discord.js)
- [Spotify JS API Wrapper](https://github.com/jmperez/spotify-web-api-js)

# Credits

- [PengY](https://github.com/pengyofficial) - Lead Programmer
- [Unnecessary Libarys](https://github.com/unnecessarylibs) - Organizer

# License

MIT
