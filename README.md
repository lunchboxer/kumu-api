# Kumu

This is an incomplete Node-based project for personal use.

In it's current development state, it is a loopback installation with data structure defined, so a very basic working REST API. It is not currently useful for anything.

"kumu" is a Hawaiian word for teacher.

## Angular 2

This branch is for setting up a foundation using angular 2 instead. It emulates many of the techniques used in [Qeti project](https://github.com/Qeti/Qeti). And explained in this [StackOverflow question](http://stackoverflow.com/questions/34843235/is-it-possible-to-generate-services-for-angular2-from-loopback).

[This issue](https://github.com/angular/angular/issues/4902) is the motivation for the hack inserted at the top of each .ts file currently:
```
 ///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
```
This keeps the transpiler from complaining too much about typings while we are developing. This will likely not be necessary in future versions of Angular2 beta.

## Install

First, install dependencies by entering the following from a terminal inside this directory:
```
$ npm install
```
Then, get the files ready to run:
```
$ npm run lb-ng
```
Now all is ready. To launch development servers reloading on any relevant changes run:
```
$ npm start
```
