# Kumu

This is an incomplete Node-based project for personal use.

In it's current development state, it is a loopback installation with data structure defined, so a very basic working RESTish API server. It is not currently useful for anything.

"kumu" is a Hawaiian word for teacher.

## Install

First, install dependencies by entering the following from a terminal inside this directory:
```
$ npm install
```
Now all is ready. To launch development server:
```
$ npm start
```
Changes made to the models should be forwarded to the angular client (kumu-ng). It's assumed to be located in the directory `../kumu-ng` if not run the npm script in package.json with a different location. Otherwise:
```
$npm run build:sdk
```
