 ///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component ({
  selector: 'about',
  templateUrl: 'templates/about.component.html',
})
export class AboutComponent {
  constructor(private _router: Router) {}
}
