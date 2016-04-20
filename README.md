# Kumu

This is an incomplete Node-based project for personal use.

In it's current development state, it is a loopback installation with data structure defined, so a very basic working REST API. It is not currently useful for anything.

"kumu" is a Hawaiian word for teacher.

## Angular 2

This client is built with Angular 2. It emulates some of the techniques used in [Qeti project](https://github.com/Qeti/Qeti). And explained in this [StackOverflow question](http://stackoverflow.com/questions/34843235/is-it-possible-to-generate-services-for-angular2-from-loopback).

## Install

First, install dependencies by entering the following from a terminal inside this directory:
```
$ npm install
```
Skip the set-up for semantic-ui. The configuration is already written into semantic.json. Then, produce the server's service file:
```
$ npm run lb-ng
```
Now all is ready. To launch development servers reloading on any relevant changes run:
```
$ npm start
```
