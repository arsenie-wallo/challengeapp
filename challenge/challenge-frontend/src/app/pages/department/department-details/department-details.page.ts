import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DepartmentModel } from '../../../models/data';
import { DetailApiService } from '../../../services/api-object-handler/api-object-handler.service'
import { InitializerService } from '../../../services/initializer/initializer.service'
// import { NavigationService } from '../../../services/navigation/navigation.service';
// import { addIcons } from 'ionicons';
// import { personCircle } from 'ionicons/icons';

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
  department!: DepartmentModel;
  // private activatedRoute = inject(ActivatedRoute);

  constructor(
    private initialize: InitializerService,
    // private navigator: NavigationService,
    private apiDetailService: DetailApiService,
    private activatedRoute: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    const url = this.getCurrentPath()
    const targetId = this.initialize.setCurrentId(url)
    this.getTargetDepartment(targetId)
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
}
