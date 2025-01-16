
import { Component, inject, OnInit } from '@angular/core';
import { DepartmentApi } from '../../services/data.service';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonNote, IonRefresherContent, IonList, IonIcon,IonLabel } from '@ionic/angular/standalone';
// import { DepartmentComponent } from '../../components/department.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DepartmentInformation } from '../../models/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    // IonRefresher,
    // IonRefresherContent,
    // IonList,
    // IonLabel
  ],
})
export class HomePage implements OnInit {
  private department: DepartmentInformation[] = [];
  // private employees: DepartmentEmployees[] = [];
  constructor(private apiService: DepartmentApi) {}

  ngOnInit() {
    console.log(`Hello from home.page.ts`);

    this.apiService.getDepartments().subscribe({
      next: (d) => {
        if (Array.isArray(d)) {
          this.department.push(...d);  // Spread the array into this.department
        }
         else {
          // If it's a single object, push it directly
          this.department.push(d);
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
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getdepartments() {
    return this.department;
    // return this.data.getDepartments();
  }

  // getemployees() {
  //   return this.employees;
  //   // return this.data.getDepartments();
  // }
}
