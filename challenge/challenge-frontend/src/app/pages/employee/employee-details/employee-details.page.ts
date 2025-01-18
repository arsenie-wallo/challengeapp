import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
  } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeModel } from '../../../models/data';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class EmployeeDetailsPage implements OnInit {
    private employee: EmployeeModel | undefined= undefined;
    // private employeeArray: EmployeeModel[] = [];
    private currentUrl: string = ""
    private employeeIndex: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // Get the current route path
    const url = this.activatedRoute.snapshot.url.join('/');
    console.log('Current URL:', url);

    // Use a regular expression to extract the number at the end of the URL
    const match = url.match(/employee\/(\d+)$/);
    if (match) {
      this.employeeIndex = +match[1];  // Convert matched string to a number
      console.log('Extracted employee ID:', this.employeeIndex);
    }
  // }
  }

  // getTest() {
    // this.currentUrl = this.router.url;
    // console.log(`Hello from details page${this.currentUrl}`)
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
