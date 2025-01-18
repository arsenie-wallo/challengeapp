import { Component, OnInit, 
  inject
} from '@angular/core';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { logoIonic, create, trash, expand } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';

import { 
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  // IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  // IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
  // IonList,
  // IonLabel
} from '@ionic/angular/standalone';

import { DepartmentApiService } from '../../../services/api-department/department-api.service';
import { DepartmentModel } from '../../../models/data';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    // IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    // IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    // IonLabel,
    IonTitle,
    IonRefresher,
    // IonList,
    IonRefresherContent
  ]
})
export class DepartmentPage implements OnInit {
  private departmentArray: DepartmentModel[] = [];
  

  constructor(
    private apiService: DepartmentApiService,
    private router: Router,
    private navigator: NavigationService,
    private retriever: DetailRetrieverService<DepartmentModel>,
    
  ) {
    addIcons({expand,trash,create,logoIonic});
  }

  ngOnInit() {
    console.log(`Hello from department.page.ts`);

    this.apiService.getDepartments().subscribe({
      next: (d) => {
        if (Array.isArray(d)) {
          this.departmentArray.push(...d);  // Spread the array into this.department
        }
         else {
          // If it's a single object, push it directly
          this.departmentArray.push(d);
        }
        // console.log(d);  // Log the data for debugging
        // console.log(typeof(d));  // Log the data for debugging

        // console.log('Department Data:', this.apiService);
      },
      error: (error) => {
        console.error('Error fetching department data', console.error);
      },
    });
  }

  onAddDepartmentClick() {
    console.log("Cicked!")
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  cancel() {

  }

  confirm () {

  }

  onWillDismiss(event: any) {

  }

  getAllDepartments() {
    return this.departmentArray;
    // return this.data.getDepartments();
  }

  getManager(id: string) {
    let _id = id;

  }
  findDepartment(id: string) {
    return this.departmentArray.find(e => e._id === id);
  }
  navigateTo(page: string) {
    this.navigator.navigateTo(page);
  }  
  //onDepartmentCardClick
  onDepartmentCardClick(id: string) {
    const department = this.findDepartment(id);
    let index;
    if (department) {
      index = this.departmentArray.indexOf(department)
      console.log(`retrieving details`)
      this.retriever.getDetailsById(department, index, "department");
      // this.getDepartmentDetailsById(index);
    }
    else {
      console.log(`Department Not Found`)
    }
  }
}
