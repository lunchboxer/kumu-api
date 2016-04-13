import { Component, Injectable, OnInit } from 'angular2/core'
import { Router } from 'angular2/router'
import { Student } from './student'
import { StudentApi as StudentService } from './lb-services'
import { UserApi as UserService } from './lb-services'
import { HTTP_PROVIDERS } from 'angular2/http'

@Component ({
  selector: 'students',
  templateUrl: './app/students.component.html',
  providers: [ StudentService, UserService, HTTP_PROVIDERS],

})
@Injectable()
export class StudentsComponent implements OnInit {
  ngOnInit(){
    this.getStudents();
  }

  constructor(private _router: Router,
              protected students: StudentService,
              protected user: UserService) {}

  studentlist: Student[];
  count: number;

  public getStudents() {
    this.students.count().subscribe((response: any) => {
      this.count = response.count;
      let data = this.students
        .find({
          offset: 0,
          limit: 100
        })
        .subscribe((response: any) => {
          this.studentlist = response;
        });
    });
  }
}
