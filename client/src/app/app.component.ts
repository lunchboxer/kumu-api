 ///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { AboutComponent } from './about.component';
import { StudentsComponent } from './students.component';
import { ClassesComponent } from './classes.component';
import { LessonsComponent } from './lessons.component';

@Component({
  selector: 'app',
  templateUrl: 'templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/',
    name: 'About',
    component: AboutComponent,
    useAsDefault: true
  },
  { path: '/students', name: 'Students', component: StudentsComponent },
  { path: '/classes', name: 'Classes', component: ClassesComponent },
  { path: '/lessons', name: 'Lessons', component: LessonsComponent },
])

export class AppComponent {
}
