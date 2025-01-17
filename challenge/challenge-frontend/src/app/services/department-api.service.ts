import { Injectable, inject } from '@angular/core';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';

import { DepartmentInformation } from '../models/data';

@Injectable(
  {providedIn: 'root'}
)
export class DepartmentApiService {
  constructor(private http: HttpClient) {}

  private activatedRoute = inject(ActivatedRoute);

  private departmentApiUrl = 'https://localhost:3000/departments';

  // private departmentData: Observable<DepartmentInformation> | null = null;

  // getDepartments(): Observable<DepartmentInformation> {
  //   console.log("test2");
  //   this.departmentData = this.http.get<DepartmentInformation>(this.departmentApiUrl);
  //   return this.departmentData;
  // }

  getDepartments(): Observable<DepartmentInformation> {
    // console.log(`xx ${this.activatedRoute}`);
    console.log(`Hello from data.service.ts`);

    return this.http.get<DepartmentInformation>(this.departmentApiUrl)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }

  // getEmployees(): Observable<DepartmentEmployees> {
  //   // console.log(`xx ${this.activatedRoute}`);
  //   console.log(`Hello from data.service.ts`);

  //   return this.http.get<DepartmentInformation>(this.departmentApiUrl)
  //   .pipe(
  //     map(this.extractData),
  //     tap(this.logResponse),
  //     catchError(this.catchError)
  //   )
  // }

  // public getDepartmentsById(id: number): DepartmentInformation {
  //   const url = `${this.departmentApiUrl}/${id}`
  //   return this.http.get<DepartmentInformation>(url);
  //   // return new BehaviorSubject<Department[]>.asObservable();
  //   // return this.departmentSubject.asObservable();
  // }
/* ----------------------------------<< Error Handling >>---------------------------------- */
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
}
// export const DEPARTMENT_COLLECTION = new Observable<DepartmentInformation[]>;