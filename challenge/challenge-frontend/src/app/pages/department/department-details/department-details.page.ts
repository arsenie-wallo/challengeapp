
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
import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';

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
  private currentDepartment = inject(DepartmentApiService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  private departmentIndex: number | null = null;


  constructor(
    private retriever: DetailRetrieverService<DepartmentModel>,
  ) {
    addIcons({ personCircle });
  }

  ngOnInit() {
    const url = this.activatedRoute.snapshot.url.join('/');
    console.log('Current URL:', url);

    // Use a regular expression to extract the number at the end of the URL
    const match = url.match(/department\/(\d+)$/);
    if (match) {
      this.departmentIndex = + match[1];  // Convert matched string to a number
      console.log('Extracted employee ID:', this.departmentIndex);
    }
  }

  // getCurrentDepartmentDetails<T, K extends keyof T>(object: T, key: K) {
  //   return `${object[key]}`

  // }

  displayDetails(key: string) {
    // this.getCurrentDepartmentDetails(this.department, key)
    // return `${this.department[key]}`
  // }
  }

  // getBackButtonText() {
  //   const isIos = this.platform.is('ios')
  //   return isIos ? 'Departments' : '';
  // }
}
