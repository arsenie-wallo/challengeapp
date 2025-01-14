import { Injectable } from '@angular/core';

export interface Department {
  id: number;
  name: string;
  lineManager: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public departments: Department[] = [];
  // public departments: Department[] = [
  //   {
  //     id: 0,
  //     name: "DPT-232",
  //     lineManager: "",
  //   },
  //   {
  //     id: 1,
  //     name: "DPT-232",
  //     lineManager: "",
  //   },
  //   {
  //     id: 2,
  //     name: "",
  //     lineManager: "",
  //   },
  //   {
  //     id: 3,
  //     name: "",
  //     lineManager: "",
  //   },
  //   {
  //     id: 4,
  //     name: "",
  //     lineManager: "",
  //   },
  //   {
  //     id: 5,
  //     name: "",
  //     lineManager: "",
  //   },
  //   {
  //     id: 6,
  //     name: "",
  //     lineManager: "",
  //   },
  //   {
  //     id: 7,
  //     name: "",
  //     lineManager: "",
  //   }
  // ];

  constructor() { }

  public getdepartments(): Department[] {
    return this.departments;
  }

  public getdepartmentsById(id: number): Department {
    return this.departments[id];
  }
}
