import { Injectable } from '@angular/core';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

import { DepartmentInformation } from '../models/data';

@Injectable(
  {providedIn: 'root'}
)
export class DepartmentApi {
  
  constructor(private http: HttpClient) {}

  private departmentApiUrl = 'https://localhost:3000/departments';
  private employeeApiUrl = 'https://localhost:3000/employees';

  private departmentData: Observable<DepartmentInformation> | null = null;

  // getDepartments(): Observable<DepartmentInformation> {
  //   console.log("test2");
  //   this.departmentData = this.http.get<DepartmentInformation>(this.departmentApiUrl);
  //   return this.departmentData;
  // }

  getDepartments(): Observable<DepartmentInformation> {
    return this.http.get<DepartmentInformation>(this.departmentApiUrl)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }

  private catchError(error: HttpErrorResponse | any): Observable<never> {
    console.log(error);
    // Handle errors properly based on the environment
    return throwError(() => new Error(`ERROR: Incorrect PIN ${error.error}`));
  }
  
  private logResponse(res: any) {
    console.log(res);
  }
  
  private extractData(res: any) {
    return res || {};  // Here we assume res is the body of the HTTP response
  }
  
  // public getDepartmentsById(id: number): DepartmentInformation {
  //   const url = `${this.departmentApiUrl}/${id}`
  //   return this.http.get<DepartmentInformation>(url);
  //   // return new BehaviorSubject<Department[]>.asObservable();
  //   // return this.departmentSubject.asObservable();
  // }
}
// export const DEPARTMENT_COLLECTION = new Observable<DepartmentInformation[]>;