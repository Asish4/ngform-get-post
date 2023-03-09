import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  url: string = 'http://localhost:3000/student';

  student: any[] = [];

  ngOnInit() {
    fetch(this.url)
      .then((response) => response.json())
      .then((student) => {
        this.student = student;
      })
      .catch((error) => {
        alert('Data loading failed! Server error');
      });
  }
}
