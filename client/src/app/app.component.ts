import { HostBinding, Input, Directive, Component } from 'angular2/core';
import { Router, RouteConfig, Instruction, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { AboutComponent } from './about.component';
import { StudentsComponent } from './students.component';
import { ClassesComponent } from './classes.component';
import { LessonsComponent } from './lessons.component';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkReplaceClass {

  //@Input('class.router-link-active')
  // myActiveClass: boolean = false;
  private _navigationInstruction: Instruction;
  @Input('routerLink')
  private _routeParams: any[];

  constructor(private _router: Router) {
    // we need to update the link whenever a route changes to account for aux routes
    this._router.subscribe((_) => this._updateLink());
  }

  private _updateLink(): void {
    this._navigationInstruction = this._router.generate(this._routeParams);
  }

  @HostBinding('class.active')
  get isRouteActive(): boolean {
    return this._navigationInstruction ? this._router.isRouteActive(this._navigationInstruction) : null;
  }
}
@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  directives: [ROUTER_DIRECTIVES, RouterLinkReplaceClass],
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
