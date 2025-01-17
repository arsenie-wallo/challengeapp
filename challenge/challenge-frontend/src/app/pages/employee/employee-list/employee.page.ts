import { Component, OnInit, 
  inject
} from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonCard,
  // IonCardHeader,
  IonCardTitle,
  // IonCardSubtitle,
  // IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  // IonLabel
} from '@ionic/angular/standalone';

// From Home 
import { EmployeeApiService } from '../../../services/employee-api.service';
import { EmployeeInformation } from '../../../models/data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    // IonCardHeader,
    IonCardTitle,
    // IonCardSubtitle,
    // IonCardContent,
    IonContent,
    IonHeader,
    IonItem,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    // IonLabel,
    IonTitle,
    IonRefresher,
    // IonList,
    IonRefresherContent
  ]
})
export class EmployeePage implements OnInit {
  private employeeArray: EmployeeInformation[] = [];
  private employee: EmployeeInformation | undefined = undefined;

  constructor(private employeeApiService: EmployeeApiService, private router: Router) {}

  ngOnInit() {
    console.log(`Hello from employee.page.ts`);

    this.employeeApiService.getEmployees().subscribe({
      next: (e) => {
        if (Array.isArray(e)) {
          this.employeeArray.push(...e);  // Spread the array into this.employee
        }
         else {
          // If it's a single object, push it directly
          this.employeeArray.push(e);
        }
      },
      error: (error) => {
        console.error('Error fetching employee data', console.error);
      },
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getAllEmployees() {
    return this.employeeArray;
    // return this.data.getEmployees();
  }
  
  navigateTo(page: string) {
    this.router.navigate([`${page}`]);
  }

  getEmployeeById(id: string) {
    const employee = this.employeeArray.find(e => e._id === id);
    this.employee = employee
    return this.employee;
  }

  // getManager(employeeId: string): string | null {
  //   const employee = this.employeeArray.find(e => e._id === employeeId);
  //   const ma = employee?.line_manager;

  //   console.log(employee);
  //   if (employee && employee.line_manager) {
  //     const manager = this.employeeArray.find(e => e._id === ma?._id);
  //     return manager ? manager.name : null;
  //   }
  //   return null;
  // }
}
