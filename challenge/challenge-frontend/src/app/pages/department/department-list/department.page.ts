import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { logoIonic, create, trash, expand } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentModel } from '../../../models/data';
import { DetailApiService } from '../../../services/api-object-handler/api-object-handler.service'
import { NavigationService } from '../../../services/navigation/navigation.service';
import { Injectable } from '@angular/core';

import { 
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
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
} from '@ionic/angular/standalone';


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
    IonCardTitle,
    IonCardSubtitle,
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
    IonTitle,
    IonRefresher,
    IonRefresherContent
  ]
})
@Injectable({
  providedIn: 'root',
})
export class DepartmentPage implements OnInit {
  isModalOpen = false;
  public departmentArray: DepartmentModel[] = [];

  constructor(
    private apiDetailService: DetailApiService,
    private navigator: NavigationService,
  ) {
    addIcons({expand,trash,create,logoIonic});
  }

  ngOnInit() {
    this.getAllDepartments()
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getAllDepartments() {
    this.apiDetailService.getAllItems<DepartmentModel>("departments").subscribe({
      next: (department) => {
        try {
          if (Array.isArray(department)) {
            this.departmentArray.push(...department); 
          }
          else {
            this.departmentArray.push(department);
          }
        } catch (error) {
          console.error('Error processing department data:', error)
        }
      },
      
      error: (error) => {
        console.error('Error fetching department data', error);
      },
    });
  }

  findDepartment(id: string) {
    return this.departmentArray.find(e => e._id === id);
  }
  
  getDepartmentsById(id: string) {
    this.navigator.navigateTo(`dev/departments/${id}`);
  }

  getManager(id: string) {
    let _id = id;
  }

  // Data Controls
  onAddDepartmentClick() {
    console.log("Cicked!")
  }
async onDeleteDepartmentClick(targetId: string) {
  console.log(`Deleting a department record ${targetId}`);

  let found: DepartmentModel | undefined = this.findDepartment(targetId);

  if (found) {
    let index = this.departmentArray.indexOf(found);
    console.log(`Department index found: ${index}`);
    try {
      await this.apiDetailService.deleteItem(targetId, "departments")
      
      if (index !== -1) {
        this.departmentArray.splice(index, 1); 
        console.log("Department deleted successfully");
      }
    } catch (error) {
    }
  } else {
    console.error(`Department with ID ${targetId} not found in local data.`);
    alert('The department was not found in the list.');
  }
}

  /* Modal */ 
setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}

cancel() {
  this.setOpen(false)
}

  confirm() {
  }
}
