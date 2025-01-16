import { Injectable, inject } from '@angular/core';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeInformation } from '../models/data';

@Injectable(
  {providedIn: 'root'}
)
export class EmployeeApiService {
  constructor(private http: HttpClient) {}

  // private activatedRoute = inject(ActivatedRoute);

  private employeeApiUrl = 'https://localhost:3000/employees';

  // private departmentData: Observable<EmployeeInformation> | null = null;

  // getEmployees(): Observable<EmployeeInformation> {
  //   console.log("test2");
  //   this.departmentData = this.http.get<EmployeeInformation>(this.departmentApiUrl);
  //   return this.departmentData;
  // }

  getEmployees(): Observable<EmployeeInformation> {
    // console.log(`xx ${this.activatedRoute}`);
    console.log(`Hello from employee-api.service.ts`);

    return this.http.get<EmployeeInformation>(this.employeeApiUrl)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }

  // public getEmployeesById(id: number): EmployeeInformation {
  //   const url = `${this.departmentApiUrl}/${id}`
  //   return this.http.get<EmployeeInformation>(url);
  //   // return new BehaviorSubject<Department[]>.asObservable();
  //   // return this.departmentSubject.asObservable();
  // }
/* ----------------------------------<< Error Handling >>---------------------------------- */
  private catchError(error: HttpErrorResponse | any): Observable<never> {
    console.log(error);
    // Handle errors properly based on the environment
    return throwError(() => new Error(`ERROR: ${error.error}`));
  }
  
  private logResponse(res: any) {
    console.log(res);
  }
  
  private extractData(res: any) {
    return res || {};  // Here we assume res is the body of the HTTP response
  }
}
// export const DEPARTMENT_COLLECTION = new Observable<EmployeeInformation[]>;