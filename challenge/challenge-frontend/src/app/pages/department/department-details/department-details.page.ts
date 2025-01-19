import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

import { DepartmentModel } from '../../../models/data';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { DetailApiService } from '../../../services/api-item-details/api-item-details.service'
import { InitializerService } from '../../../services/initializer/initializer.service'

import { 
  IonButton,
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonTitle,
  IonToolbar
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-department',
  templateUrl: './department-details.page.html',
  styleUrls: ['./department-details.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonButton,
    IonButtons,
    IonBackButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonTitle,
    IonToolbar
  ],
})

export class DepartmentDetailsPage implements OnInit {
  public department!: DepartmentModel;
  // private activatedRoute = inject(ActivatedRoute);

  constructor(
    private initialize: InitializerService,
    private navigator: NavigationService,
    private apiDetailService: DetailApiService,
    private activatedRoute: ActivatedRoute,
    ) {
      addIcons({ personCircle });
  }

  ngOnInit() {
    const url = this.getCurrentPath()
    const targetId = this.initialize.setCurrentId(url)
    this.getTargetDepartment(targetId)
    // const targetId = this.getCurrentPath()
    // this.getTargetDepartment(targetId)
    /*
    const url = this.activatedRoute.snapshot.url.join('/');
    console.log('Current URL:', url);
    
    // Use a regular expression to extract the number at the end of the URL
    const match = url.match(/department\/(\d+)$/);
    if (match) {
      this.departmentIndex = + match[1];  // Convert matched string to a number
      console.log('Extracted employee ID:', this.departmentIndex);
    }
    */
  }
  
  getCurrentPath() {
    return this.activatedRoute.snapshot.url.join('/');
  };

  getTargetDepartment(targetId: string) {
    this.apiDetailService.getItemById(targetId, "departments").subscribe({
      next: (response) => {
        this.department = response
      },
      error: (error) => {
        console.error('Error fetching employee data', error);
      },
    });
  }
  
  // getDepartmentsById(id: string) {
  //   this.currentDepartment.getDepartmentById(id).subscribe({
  //     next: (response) => {
  //       this.navigator.navigateTo(`dev/departments/${id}`)
  //       console.log(`From dept details page: ${response}`);

  //     },
  //     error: (error) => {
  //       console.error('Error fetching department data', console.error);
  //     }
  //   })
  // }
}
