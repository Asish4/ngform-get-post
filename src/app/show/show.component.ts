import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { Subject } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  constructor(private studentService: StudentService) { }


  // Create a object variablr for showing data in modal
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

  /**Store the Row data in studentToUpdate Object*/
  showValueModal(st: any) {
    this.studentToUpdate = st;
  }


  ids: string = "";

  // Store the id
  takeSubmitId(id: any) {
    this.ids = id;
  }


  /**Store the Modal form date in datas object*/
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

    /**Call PutSTudent Function for EditData */
    this.studentService.putStudent(datas, this.ids).subscribe(() => {
      alert("Data successfully Updated");
    }), (err: HttpErrorResponse) => {
      console.log(err)
    }
  }

  /**Receive id and send the id for delete the data*/
  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(() => {
      alert("Data successfully Deleted");
    }), (err: HttpErrorResponse) => {
      console.log(err)
    }
  }
  students: any = [];

  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit() {

    // Customise the page
    this.dtoptions = {
      pagingType: 'full_numbers'
    };

    /**Calling getStudent() Function*/
    this.getStudent()

  }

  /**Call function for get data*/
  public getStudent() {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
        this.dtTrigger.next(null);
      }, (err: HttpErrorResponse) => {
        console.log(err)
      }
    )
  }
}


