import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  getDepartments(): Observable<DepartmentModel> {
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