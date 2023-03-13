import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }
    //private apiServerUrl = enviornment.apiBaseUrl;
    private apiServerUrl = "http://localhost:3000";


    // get students data
    public getStudents(): Observable<Student> {
        return this.http.get<Student>(this.apiServerUrl + '/students');
    }

    // Send the student data
    public postStudents(data: any): Observable<Student> {
        return this.http.post<Student>(this.apiServerUrl + '/students', data);
    }

    // Delete the student data
    public deleteStudent(id: any): Observable<Student> {
        return this.http.delete<Student>(this.apiServerUrl + '/students' + '/' + id)

    }

    // Update the student data
    public putStudent(data: any, id: any): Observable<Student> {
        return this.http.put<Student>(this.apiServerUrl + '/students' + '/' + id, data);
    }

}