import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

export interface Department {
  id: number;
  name: string;
  lineManager: string;
}

@Injectable(
  {providedIn: 'root'}
)
export class DataService {
  public departments: Department[] = [
    {
      id: 0,
      name: "DPT-232",
      lineManager: "",
    },
    {
      id: 1,
      name: "DPT-232",
      lineManager: "",
    },
    {
      id: 2,
      name: "",
      lineManager: "",
    },
    {
      id: 3,
      name: "",
      lineManager: "",
    },
    {
      id: 4,
      name: "",
      lineManager: "",
    }
  ];

  constructor() { }

  public getDepartments(): Department[] {
    return this.departments;
  }

  public getDepartmentsById(id: number): Department {
    // return this.http.get(`https://localhost:3000/employees/${id}`)

    return this.departments[id];
  }
}
