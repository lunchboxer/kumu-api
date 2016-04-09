 ///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component ({
  selector: 'students',
  template: '<h2>Students</h2>'
})
export class StudentsComponent {
  constructor(private _router: Router) {}
}
