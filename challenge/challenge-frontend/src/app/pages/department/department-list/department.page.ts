import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { logoIonic, create, trash, expand } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentModel } from '../../../models/data';
import { DetailApiService } from '../../../services/api-object-handler/api-object-details.service'
import { NavigationService } from '../../../services/navigation/navigation.service';

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

export class DepartmentPage implements OnInit {
  isModalOpen = false;
  departmentArray: DepartmentModel[] = [];

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
        if (Array.isArray(department)) {
          this.departmentArray.push(...department);  // Spread the array into this.department
        }
         else {
          this.departmentArray.push(department);
        }
      },
      error: (error) => {
        console.error('Error fetching department data', console.error);
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
/*
onDeleteDepartmentClick(targetId: string) {
  console.log(`Deleting a department record ${targetId}`)
  let found: DepartmentModel | undefined = this.findDepartment(targetId)
  if(found) {
    let numero = this.departmentArray.indexOf(found)
    console.log(numero)
    this.http.delete(`https://localhost:3000/departments/${numero}`)
      console.log('Department deleted:', found);
    this.navigateTo("department/")
      this.departmentArray.splice(numero, 1);  // Remove department at given targetId
    }
  }
*/
async onDeleteDepartmentClick(targetId: string) {
  console.log(`Deleting a department record ${targetId}`);

  // Step 1: Find the department by targetId
  let found: DepartmentModel | undefined = this.findDepartment(targetId);

  // Check if department is found in local array
  if (found) {
    // Step 2: Find the index of the department in the array
    let index = this.departmentArray.indexOf(found);
    console.log(`Department index found: ${index}`);
    try {
      // Step 3: Make the HTTP DELETE request using async/await
      await this.apiDetailService.deleteItem(targetId, "departments")//.toPromise(); // Convert observable to promise using toPromise()
      
      // Step 4: Remove department from the local array
      if (index !== -1) {
        this.departmentArray.splice(index, 1); // Removes the department from array
        console.log("Department deleted successfully");

        // Optionally navigate to another page
        // this.navigateTo("https:///localhost:3000//");
        // this.navigator.navigateTo("departments")
      }
    } catch (error) {
      // Step 5: Handle errors gracefully
      // if (error.status === 404) {
      //   // if (error.status === 404) {
      //   console.error(`Department with ID ${targetId} not found.`, error);
      //   alert('The department was not found or has already been deleted.');
      // } else {
      //   console.error('Error deleting department:', error);
      //   alert('Failed to delete the department. Please try again later.');
      // }
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

// onDepartmentCardClick(id: string) {
//   const department = this.findDepartment(id);
//   let index;
//   if (department) {
//     index = this.departmentArray.indexOf(department)
//     console.log(`retrieving details`)
//     // this.retriever.getDetailsById(department, index, "departments");
//     // this.getDepartmentDetailsById(index);
//   }
//   else {
//     console.log(`Department Not Found`)
//   }
// }

  confirm() {
    // // Handle the modal input and capture the entered department details
    // if (this.departmentName.trim() && this.departmentDescription.trim() && this.departmentCode.trim()) {
    //   console.log(`New Department Name: ${this.departmentName}`);
    //   console.log(`Department Description: ${this.departmentDescription}`);
    //   console.log(`Department Code: ${this.departmentCode}`);
      
    //   // Optionally, add the new department to the list or save it to the database
    //   this.isModalOpen = false; // Close the modal
    // } else {
    //   console.error('All fields are required');
    // }

    // this.setOpen(false)
  }
}
