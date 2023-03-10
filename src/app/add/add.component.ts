import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {


  constructor(private studentService: StudentService) { }

  // constructor(private studentService: StudentService)
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








    this.studentService.postStudents(data).subscribe((data) => {

    })


  }
}
