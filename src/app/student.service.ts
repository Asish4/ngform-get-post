import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }
    //private apiServerUrl = enviornment.apiBaseUrl;
    private apiServerUrl = "http://192.168.0.108:8080";

    public getStudents(): Observable<Student> {

        // console.log(this.http.get<Student>(this.apiServerUrl + '/students'));
        return this.http.get<Student>(this.apiServerUrl + '/students');
    }

    public postStudents(data: any): Observable<Student> {

        // console.log(this.http.get<Student>(this.apiServerUrl + '/students'));
        return this.http.post<Student>(this.apiServerUrl + '/students', data);
    }


}