 ///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import { Component, Injectable, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { StudentApi as StudentService } from './lb-services';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component ({
  selector: 'students',
  template: '<h2>Students</h2>',
  providers: [ StudentService, HTTP_PROVIDERS],

})
@Injectable()
export class StudentsComponent implements OnInit {
  ngOnInit(){
    this.getStudents();
  }
  students: any

  constructor(private _router: Router,
              private _studentService: StudentService ) {}
  getStudents(){
    this.students = this._studentService.find();
    console.log(this.students);
  }
}
