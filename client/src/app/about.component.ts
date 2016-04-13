import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component ({
  selector: 'about',
  templateUrl: './app/about.component.html',
})
export class AboutComponent {
  constructor(private _router: Router) {}
}
