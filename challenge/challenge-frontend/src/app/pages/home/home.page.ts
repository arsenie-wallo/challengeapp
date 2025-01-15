
import { Component, inject, OnInit } from '@angular/core';
import { DepartmentApi } from '../../services/data.service';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonNote, IonRefresherContent, IonList, IonIcon,IonLabel } from '@ionic/angular/standalone';
import { DepartmentComponent } from '../../components/department.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
    IonLabel
  ],

})
export class HomePage implements OnInit {
  private department = [
    {
      id: 1,
      name: "test",
      lineManager: "Sussan"
    }
  ];
  // private department = inject(DepartmentApi);

  // departments: DepartmentApi[] = [];
  constructor(private apiService: DepartmentApi) {}

  ngOnInit() {
    this.apiService.getDepartments().subscribe({
      next: (department) => {
        // this.departments = department;
        console.log('Department Data:', this.department);
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
}
