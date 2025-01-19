import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EmployeeModel } from '../../../models/data';
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
    // FormsModule
  ]
})
export class EmployeeDetailsPage implements OnInit {
  employee!: EmployeeModel;

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
}
