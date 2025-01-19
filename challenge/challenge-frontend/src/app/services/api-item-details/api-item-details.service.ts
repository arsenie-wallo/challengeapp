import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { DepartmentModel } from '../../models/data';
import { EmployeeModel } from '../../models/data';

@Injectable(
  {providedIn: 'root'}
)
export class DetailApiService {
  private databaseUri = `https://localhost:3000`
  constructor(private http: HttpClient) {}
  // private departmentApiUrl = 'https://localhost:3000/departments';

  getAllItems<T>(itemType: string): Observable<T> {
    // getDepartments(): Observable<DepartmentModel> {
    // private departmentApiUrl = 'https://localhost:3000/departments';
    let uri = `${this.databaseUri}/${itemType}`

    return this.http.get<T>(uri) //departmentApiUrl
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }
  
  getItemById(id: string, type: string) {
    const uri = `${this.databaseUri}/dev/${type}/${id}`
    // console.log(uri)
    return this.http.get<DepartmentModel | EmployeeModel>(uri)
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
    // console.log(`Hello from API details page:`)
    // console.log(res);
  }
  
  private extractData(res: any) {
    return res || {};  // Here we assume res is the body of the HTTP response
  }
}