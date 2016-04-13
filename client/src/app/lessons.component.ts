import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component ({
  selector: 'lesson',
  template: '<h2>Lessons</h2>'
})
export class LessonsComponent {
  constructor(private _router: Router) {}
}
