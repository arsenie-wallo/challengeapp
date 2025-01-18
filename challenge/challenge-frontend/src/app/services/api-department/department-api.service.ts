import { Injectable, inject } from '@angular/core';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';

import { DepartmentModel } from '../../models/data';

@Injectable(
  {providedIn: 'root'}
)
export class DepartmentApiService {
  constructor(private http: HttpClient) {}

  private activatedRoute = inject(ActivatedRoute);

  private departmentApiUrl = 'https://localhost:3000/departments';

  // private departmentData: Observable<DepartmentModel> | null = null;

  // getDepartments(): Observable<DepartmentModel> {
  //   console.log("test2");
  //   this.departmentData = this.http.get<DepartmentModel>(this.departmentApiUrl);
  //   return this.departmentData;
  // }

  getDepartments(): Observable<DepartmentModel> {
    // console.log(`xx ${this.activatedRoute}`);
    // console.log(`Hello from data.service.ts`);

    return this.http.get<DepartmentModel>(this.departmentApiUrl)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }
  deleteDepartment(id: string) {
    // https://localhost:3000/dev/departments/DPT-01
    let uri = `https://localhost:3000/dev/departments/${id}`
    console.log(`TARG URI: ${uri}`)
    this.http.delete(uri)
      .pipe(
        map(this.extractData),
        tap(this.logResponse),
        catchError(this.catchError)
      )
  }
  // deleteDepartment(departmentIndex: number) {
  //   console.log(`TARG URI: ${this.departmentApiUrl}/${departmentIndex}`)
  //   this.http.delete(`${this.departmentApiUrl}/${departmentIndex}`)
  //     // .pipe(
  //     //   map(this.extractData),
  //     //   tap(this.logResponse),
  //     //   catchError(this.catchError)
  //     // )
  // }

  // deleteDepartment(departmentId: string): Observable<DepartmentModel>{
  //   console.log(`Hello from department-api.service.ts. Deleting a department: ${departmentId}`)
  //   return this.http.delete<DepartmentModel>(`${this.departmentApiUrl}/${departmentId}`)
  //   .pipe(
  //     map(this.extractData),
  //     tap(this.logResponse),
  //     catchError(this.catchError)
  //   )
  // }

  getDepartmentById(id: string) {
    const url = `https://localhost:3000/dev/departments/${id}`
    return this.http.get<DepartmentModel>(url)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
    // return new BehaviorSubject<Department[]>.asObservable();
    // return this.departmentSubject.asObservable();
  }
/* ----------------------------------<< Error Handling >>---------------------------------- */
  private catchError(error: HttpErrorResponse | any): Observable<never> {
    console.log(error);
    // Handle errors properly based on the environment
    return throwError(() => new Error(`ERROR: ${error.error}`));
  }
  
  private logResponse(res: any) {
    // console.log(res);
  }
  
  private extractData(res: any) {
    return res || {};  // Here we assume res is the body of the HTTP response
  }
}
// export const DEPARTMENT_COLLECTION = new Observable<DepartmentModel[]>;