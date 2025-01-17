import { Component, OnInit, 
  inject
} from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { 
  IonCard,
  // IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
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
import { EmployeeApiService } from '../../../services/employee-api/employee-api.service';
import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';
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
    IonCardSubtitle,
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

  constructor(
    private employeeApiService: EmployeeApiService,
    private router: Router,
    private navigator: NavigationService,
    private retriever: DetailRetrieverService<EmployeeInformation>
  ) {}

  ngOnInit() {
    console.log(`Hello from employee.page.ts`);

    this.employeeApiService.getEmployees().subscribe({
      next: (employee) => {
        if (Array.isArray(employee)) {
          // employee.index = index;
          this.employeeArray.push(...employee);  // Spread the array into this.employee
        }
         else {
          // If it's a single object, push it directly
          this.employeeArray.push(employee);
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
    // this.getEmployeeById(`${this.employeeArray[0]._id}`);
    // console.log(`hey: ${this.employeeArray[0]._id}`)
    // console.log(`${this.employeeArray.indexOf(this.employeeArray[0])}`)
    return this.employeeArray;
    // return this.data.getEmployees();
  }
  
  // navigateTo(page: string) {
  //   this.navigator.navigateTo(page);
  // }
  
  findEmployee(id: string) {
    return this.employeeArray.find(e => e._id === id);
  }

  onEmployeeCardClick(id: string) {
    const employee = this.findEmployee(id);
    let index;
    if (employee) {
      index = this.employeeArray.indexOf(employee)
      console.log(`retrieving details`)
      this.retriever.getDetailsById(employee, index, "employee");
      // this.getEmployeeDetailsById(index);
    }
    else {
      console.log(`Employee Not Found`)
    }
  }
  // getEmployeeDetailsById(index: number) {
  //   console.log(`${index}`)
  //   this.navigateTo(`employee/${index}`);
  // }

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
