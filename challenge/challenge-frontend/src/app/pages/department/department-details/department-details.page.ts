
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader,
  IonButtons,
  IonBackButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonToolbar
 } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DepartmentApiService } from '../../../services/api-department/department-api.service';

import { DepartmentModel } from '../../../models/data';

@Component({
  selector: 'app-view-department',
  templateUrl: './department-details.page.html',
  styleUrls: ['./department-details.page.scss'],
  imports: [IonHeader,
    IonButtons,
    IonBackButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonToolbar
  ],
})
export class DepartmentDetailsPage implements OnInit {
  public department!: DepartmentModel;
  private data = inject(DepartmentApiService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  // getBackButtonText() {
  //   const isIos = this.platform.is('ios')
  //   return isIos ? 'Departments' : '';
  // }
}
