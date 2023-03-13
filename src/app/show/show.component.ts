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

  studentToUpdate = {
    "id": "",
    "name": "",
    "phoneNo": "",
    "email": "",
    "state": "",
    "city": "",
    "country": "",
    "pin": ""

  };

  showValueModal(st: any) {
    this.studentToUpdate = st;
    console.log(this.studentToUpdate);

  }

  ids: string | undefined;
  // student: Student[] = [];
  takeSubmitId(id: any) {
    this.ids = id;

    // let currentStudent = this.student.find((s) => { return s.id == id });
    // console.log(currentStudent);

  }


  editSubmit(value: any) {
    const datas: object = {
      "name": value.name,
      "phoneNo": value.mobile_number,
      "email": value.email,
      "state": value.state,
      "city": value.city,
      "country": value.country,
      "pin": value.pin_code,
    };

    this.studentService.putStudent(datas, this.ids).subscribe(() => {
      alert("Data successfully Updated");
    })
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(() => {
      alert("Data successfully Deleted");
    })
  }

  students: any = [];
  ngOnInit() {
    this.getStudent()
  }

  public getStudent() {
    this.studentService.getStudents().subscribe(
      data => this.students = data,
      (HttpErrorResponse) => {
        alert("Sorry! server error, data loading failed!");
      }

    )

  }
}