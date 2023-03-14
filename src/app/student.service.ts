import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from './student';
@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }
    //private apiServerUrl = enviornment.apiBaseUrl;
    private apiServerUrl = "http://localhost:3000";

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }

    // get students data
    public getStudents(): Observable<Student> {
        return this.http.get<Student>(this.apiServerUrl + '/students').pipe(catchError(this.handleError))
    }

    // Send the student data
    public postStudents(data: any): Observable<Student> {
        return this.http.post<Student>(this.apiServerUrl + '/students', data).pipe(catchError(this.handleError));
    }

    // Delete the student data
    public deleteStudent(id: any): Observable<Student> {
        return this.http.delete<Student>(this.apiServerUrl + '/students' + '/' + id).pipe(catchError(this.handleError))

    }

    // Update the student data
    public putStudent(data: any, id: any): Observable<Student> {
        return this.http.put<Student>(this.apiServerUrl + '/students' + '/' + id, data).pipe(catchError(this.handleError));
    }

}