import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeInformation } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private currentEmployeeSubject = new BehaviorSubject<EmployeeInformation | null>(null);

  constructor() {}

  // Set the current employee
  setCurrentEmployee(employee: EmployeeInformation) {
    this.currentEmployeeSubject.next(employee);
  }

  // Get the current employee
  getCurrentEmployee() {
    return this.currentEmployeeSubject.asObservable();
  }
}
