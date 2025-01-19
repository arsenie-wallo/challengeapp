import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeApiService } from '../../../services/api-employee/employee-api.service';
import { EmployeeModel } from '../../../models/data';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
    // private employeeArray: EmployeeModel[] = [];
    // private currentUrl: string = ""
    // private employeeIndex: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: EmployeeApiService,
     
  ) { }

  ngOnInit() {
   const targetId = this.getCurrentPath()
   this.getTargetEmployee(targetId)
  //  this.setEmployeeDetails()

   // Use a regular expression to extract the number at the end of the URL
  //  const match = url.match(/dev\/employees\/(\d+)$/);
  //  const match = url.match(/dev\/employees\/(\d{8}-[A-Za-z0-9]+)$/);

  //  if (match) {
    //  this.employeeIndex = +match[1];  // Convert matched string to a number
    //  console.log('Extracted employee ID:', this.employeeIndex);
  //  }
  };

  getCurrentPath() {
    const url = this.activatedRoute.snapshot.url.join('/')
    //  console.log('Current URL:', url);
    let targetId = "";
     const match = url.match(/([^\/]+)$/);
      if (match) {
        targetId = match[1];
        console.log(targetId);
      } else {
        console.log('No match found');
      }
    return targetId;
  };

  getTargetEmployee(targetId: string) {
    this.apiService.getEmployeesById(targetId).subscribe({
      next: (response) => {
        this.employee = response
        console.log(response)
        // if (Array.isArray(d)) {
        //   this.employeeArray.push(...d);  // Spread the array into this.department
        // }
        //  else {
        //   // If it's a single object, push it directly
        //   this.employeeArray.push(d);
        // }
      },
      error: (error) => {
        console.error('Error fetching department data', error);
      },
    });
  }

  displayEmployeeDetails() {
    return this.employee
  }

  // setEmployeeDetails() {
  //   this.employee = response
  // }

  // findEmployee(id: string) {
  //   return this.employeeArray.find(e => e._id === id);
  // }

  // onEmployeeCardClick(id: string) {
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
