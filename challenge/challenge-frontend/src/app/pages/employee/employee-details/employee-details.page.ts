import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeInformation } from '../../../models/data';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EmployeeDetailsPage implements OnInit {
    private employee: EmployeeInformation | undefined= undefined;
    // private employeeArray: EmployeeInformation[] = [];
    private currentUrl: string = ""
    private employeeId: number | null = null;

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
      this.employeeId = +match[1];  // Convert matched string to a number
      console.log('Extracted employee ID:', this.employeeId);
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
