import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {


  constructor(private studentService: StudentService) { }

  // Store the form data in dada vbject variable
  submit(value: any) {
    const data: object = {
      "name": value.name,
      "phoneNo": value.mobile_number,
      "email": value.email,
      "state": value.state,
      "city": value.city,
      "country": value.country,
      "pin": value.pin_code,
    };


    /**Call function for POST data*/
    this.studentService.postStudents(data).subscribe(() => {
      alert("Data successfully Added");
    }), (err: HttpErrorResponse) => {
      console.log(err)
    }


  }
}
