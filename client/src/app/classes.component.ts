import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component ({
  selector: 'classes',
  template: '<h2>Classes</h2>'
})
export class ClassesComponent {
  constructor(private _router: Router) {}
}
