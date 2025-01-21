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

  getAllItems<T>(itemType: string): Observable<T> {
    let uri = `${this.databaseUri}/${itemType}`

    return this.http.get<T>(uri)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }

  getItemById(id: string, type: string) {
    const uri = `${this.databaseUri}/dev/${type}/${id}`
    return this.http.get<DepartmentModel | EmployeeModel>(uri)
    .pipe(
      map(this.extractData),
      tap(this.logResponse),
      catchError(this.catchError)
    )
  }

  deleteItem(id: string, type: string) {
    let uri = `${this.databaseUri}/dev/${type}/${id}`
    console.log(`Sending DELETE request to: ${uri}`)

    return this.http.delete(uri)
      .pipe(
        map(this.extractData),
        tap(this.logResponse),
        catchError(this.catchError)
      )
  }
/* ----------------------------------<< Error Handling >>---------------------------------- */
  private catchError(error: HttpErrorResponse | any): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`ERROR: ${error.error}`));
  }
  
  private logResponse(res: any) {
    // console.log(res);
  }
  
  private extractData(res: any) {
    return res || {};
  }
}