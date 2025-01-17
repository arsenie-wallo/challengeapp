
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DepartmentApiService } from '../../../services/department-api/department-api.service';

import { DepartmentInformation } from '../../../models/data';

@Component({
  selector: 'app-view-department',
  templateUrl: './department-details.page.html',
  styleUrls: ['./department-details.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote],
})
export class DepartmentDetailsPage implements OnInit {
  public department!: DepartmentInformation;
  private data = inject(DepartmentApiService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Departments' : '';
  }
}
