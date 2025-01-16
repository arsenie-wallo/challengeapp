
// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { personCircle } from 'ionicons/icons';
// import { DepartmentApi } from '../../services/data.service';
// import { DepartmentInformation } from '../../models/data';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-view-department',
//   templateUrl: './view-department.page.html',
//   styleUrls: ['./view-department.page.scss'],
//   imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote],
// })
// export class ViewDepartmentPage implements OnInit {
//   public department!: DepartmentInformation;
//   private data = inject(DepartmentApi);
//   private activatedRoute = inject(ActivatedRoute);
//   private platform = inject(Platform);

//   constructor() {
//     addIcons({ personCircle });
//   }

//   ngOnInit() {
//     const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
//     // this.department = this.data.getDepartmentsById(parseInt(id, 10));
//   }

//   getBackButtonText() {
//     const isIos = this.platform.is('ios')
//     return isIos ? 'Departments' : '';
//   }
// }
