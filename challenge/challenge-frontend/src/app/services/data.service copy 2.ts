// import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { DepartmentInformation } from '../models/data';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/do';
// // import 'rxjs/add/operator/catch';

// // export interface Department {
// //   id: number;
// //   name: string;
// //   lineManager: string;
// // }

// @Injectable(
//   {providedIn: 'root'}
// )
// export class Department {
//   private departmentSubject: BehaviorSubject<DepartmentInformation[]> = new BehaviorSubject<DepartmentInformation[]>(DEPARTMENT_COLLECTION);

//   constructor() {}
//   //"20230104-FSM029"

//   // public 
//   getDepartments(): Observable<Department[]> {
//     const departmentList: Department[] = Object.values(Department);
//     // return this.departmentSubject.asObservable();
//   }
//   public getDepartmentsById(id: number, name: employeeName):  Observable<Department[]> {
//     // return new BehaviorSubject<Department[]>.asObservable();
//     return this.departmentSubject.asObservable();
//   }
// }

// export const DEPARTMENT_COLLECTION = new Observable<DepartmentInformation[]>;
// /*
//  = [
//   {
//     id: 1,
//     name: "Sam Well",
//     lineManager: "Dina Miraz",
//   },
// ]
// */