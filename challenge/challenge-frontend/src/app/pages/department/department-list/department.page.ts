import { Component, OnInit, 
  inject
} from '@angular/core';
import { Router } from '@angular/router';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  // IonLabel
} from '@ionic/angular/standalone';

// From Home
import { DepartmentApi } from '../../../services/data.service';
import { DepartmentInformation } from '../../../models/data';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    // IonLabel,
    IonTitle,
    IonRefresher,
    IonList,
    IonRefresherContent
  ]
})
export class DepartmentPage implements OnInit {
  private department: DepartmentInformation[] = [];

  constructor(private apiService: DepartmentApi, private router: Router) {}

  ngOnInit() {
    console.log(`Hello from department.page.ts`);

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
  
  navigateTo(page: string) {
    this.router.navigate([`${page}`]);
  }
  // getemployees() {
  //   return this.employees;
  //   // return this.data.getDepartments();
  // }

  

}
