import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeModel } from '../../../models/data';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailApiService } from '../../../services/api-item-details/api-item-details.service'
import { InitializerService } from '../../../services/initializer/initializer.service'

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonNote,
  IonTitle,
  IonToolbar
  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonNote,
    IonTitle,
    IonToolbar,
    FormsModule
  ]
})
export class EmployeeDetailsPage implements OnInit {
    employee: EmployeeModel | undefined= undefined;

  constructor(
    private initialize: InitializerService,
    private apiDetailService: DetailApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const url = this.getCurrentPath()
    const targetId = this.initialize.setCurrentId(url)
    this.getTargetEmployee(targetId)
  };

  getCurrentPath() {
    return this.activatedRoute.snapshot.url.join('/');
  };

  getTargetEmployee(targetId: string) {
    this.apiDetailService.getItemById(targetId, "employees").subscribe({
      next: (response) => {
        this.employee = response
        // console.log(`Hello from details page:`)
        // console.log(response)
      },
      error: (error) => {
        console.error('Error fetching employee data', error);
      },
    });
  }

  displayEmployeeDetails() {
    return this.employee
  }

  //   console.log(`retrieving details`)
  //   const employee = this.findEmployee(id);
  //   let index;
  //   if (employee) {
  //     index = this.employeeArray.indexOf(employee)
  //     // this.retriever.getDetailsById(employee, index);
  //     // this.getEmployeeDetailsById(index);
  //   }
  //   else {
  //     console.log(`Employee Not Found`)
    // }
}
