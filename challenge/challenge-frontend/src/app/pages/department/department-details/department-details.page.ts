
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader,
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
 } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { DepartmentApiService } from '../../../services/api-department/department-api.service';
import { DepartmentModel } from '../../../models/data';
// import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';
import { NavigationService } from '../../../services/navigation/navigation.service';

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
  private currentDepartment = inject(DepartmentApiService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  private departmentIndex: number | null = null;


  constructor(
    // private retriever: DetailRetrieverService<DepartmentModel>,
    private navigator: NavigationService,
    private apiService: DepartmentApiService,
    
    ) {
      addIcons({ personCircle });
  }

  ngOnInit() {
    const targetId = this.getCurrentPath()
    this.getTargetDepartment(targetId)
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
    const url = this.activatedRoute.snapshot.url.join('/')
    //  console.log('Current URL:', url);
    let targetId = "";
     const match = url.match(/([^\/]+)$/);
      if (match) {
        targetId = match[1];
        console.log(targetId);
      } else {
        console.log('No match found');
      }
    return targetId;
  };

  getTargetDepartment(targetId: string) {
    this.apiService.getDepartmentById(targetId).subscribe({
      next: (response) => {
        this.department = response
        console.log(response)
      },
      error: (error) => {
        console.error('Error fetching department data', error);
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
