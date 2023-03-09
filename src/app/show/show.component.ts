import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {


  constructor(private studentService: StudentService) { }
  students: any = [];
  ngOnInit() {
    this.getStudent()
  }

  public getStudent() {
    this.studentService.getStudents().subscribe(
      data => console.log(this.students = data),

      (error: HttpErrorResponse) => {
        console.error("Cannot call API: ", error);
        alert("Sorry! server error, data loading failed!");
      }

    )

  }
}