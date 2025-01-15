import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DepartmentInformation } from '../models/data';
// import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class DepartmentApi {
  private departmentData: DepartmentInformation | null = null;
  private apiUrl = 'https://localhost:3000/employees';

  constructor(private http: HttpClient) {}
  //"20230104-FSM029"

  // public 
  getDepartments(): Observable<DepartmentInformation> {
    return this.http.get<DepartmentInformation>(this.apiUrl);
  }
  // public getDepartmentsById(id: number): DepartmentInformation {
  //   const url = `${this.apiUrl}/${id}`
  //   return this.http.get<DepartmentInformation>(url);
  //   // return new BehaviorSubject<Department[]>.asObservable();
  //   // return this.departmentSubject.asObservable();
  // }
}

// export const DEPARTMENT_COLLECTION = new Observable<DepartmentInformation[]>;