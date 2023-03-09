import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  url: string = 'http://localhost:3000/student';

  submit(value: any) {
    const data: object = {
      name: value.name,
      phoneNo: value.mobile_number,
      email: value.email,
      state: value.state,
      city: value.city,
      country: value.country,
      pin: value.pin_code,
    };
    console.log(value.name);
    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(this.url, param).then((response) => {
      alert('Successfuly added the data');
      response.json();
    });
  }
}
