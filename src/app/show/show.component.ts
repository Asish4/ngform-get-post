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

  ids: string = "hello";

  takeSubmitId(id: any) {


    this.ids = id;
    // console.log(this.ids);

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



    this.studentService.putStudent(datas, this.ids).subscribe((data) => {

    })


  }





  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe();
  }

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