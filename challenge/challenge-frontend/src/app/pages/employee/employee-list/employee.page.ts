import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeApiService } from '../../../services/api-employee/employee-api.service';
// import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';
import { EmployeeModel } from '../../../models/data';
import { NavigationService } from '../../../services/navigation/navigation.service';
// import { ModalController } from '@ionic/angular';
// import { ModalComponent } from '../../../components/modal/modal.component'; 
import { addIcons } from 'ionicons';
import { logoIonic, create, trash, expand } from 'ionicons/icons';

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
  IonNav,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  // IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  standalone: true,
  imports: [
    // ModalComponent,
    // Form,
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
    IonNav,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    // IonLabel,
    IonRefresher,
    // IonList,
    IonRefresherContent
  ]
})
export class EmployeePage implements OnInit {
  isModalOpen = false;
  private employeeArray: EmployeeModel[] = [];
  // private employee: EmployeeModel | undefined = undefined;

  constructor(
    private employeeApiService: EmployeeApiService,
    // private router: Router,
    private navigator: NavigationService,
    // private retriever: DetailRetrieverService<EmployeeModel>,
    // private modal: ModalComponent,
    // private controller: ModalController
  ) {
    addIcons({create,trash,expand,logoIonic});
  }

  ngOnInit() {
    console.log(`Hello from employee.page.ts`);

    this.employeeApiService.getEmployees().subscribe({
      next: (employee) => {
        if (Array.isArray(employee)) {
          this.employeeArray.push(...employee);  // Spread the array into this.employee
        }
         else {
          // If it's a single object, push it directly
          this.employeeArray.push(employee);
        }
      },
      error: (error) => {
        console.error('Error fetching employee data', console.error);
      },
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  getEmployeeById(id: string) {
    this.navigateTo(`dev/employees/${id}`)
  }

  navigateTo(page: string) {
    this.navigator.navigateTo(page);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  /* Modal */ 
  cancel() {
    this.setOpen(false)
  }

  confirm () {
    this.setOpen(false)
  }

  getAllEmployees() {
    return this.employeeArray;
  }

  findEmployee(id: string) {
    return this.employeeArray.find(e => e._id === id);
  }
  // displayMessage() {
  //   return this.message
  // }

  // onEmployeeCardClick(id: string) {
  //   // const employee = this.findEmployee(id);
  //   // let index;
  //   // if (employee) {
  //   //   index = this.employeeArray.indexOf(employee)
  //   //   console.log(`retrieving details`)
  //   //   this.retriever.getDetailsById(employee, index, "employee");
  //   //   // this.getEmployeeDetailsById(index);
  //   // }
  //   // else {
  //   //   console.log(`Employee Not Found`)
  //   // }
  // }

  async onDeleteEmployeeClick(targetId: string) {
    console.log(`Deleting a employee record ${targetId}`);
  
    // Step 1: Find the employee by targetId
    let found: EmployeeModel | undefined = this.findEmployee(targetId);
  
    // Check if employee is found in local array
    if (found) {
      // Step 2: Find the index of the employee in the array
      let index = this.employeeArray.indexOf(found);
      console.log(`Employee index found: ${index}`);
      try {
        // Step 3: Make the HTTP DELETE request using async/await
        await this.employeeApiService.deleteEmployee(targetId)//.toPromise(); // Convert observable to promise using toPromise()
        
        // Step 4: Remove employee from the local array
        if (index !== -1) {
          this.employeeArray.splice(index, 1); // Removes the employee from array
          console.log("Employee deleted successfully");
  
          // Optionally navigate to another page
          // this.navigateTo("https:///localhost:3000//");
          // this.navigator.navigateTo("employees")
        }
      } catch (error) {
        console.error('Error deleting employee:', error);
        // // Step 5: Handle errors gracefully
        // if (error.status === 404) {
        //   // if (error.status === 404) {
        //   console.error(`employee with ID ${targetId} not found.`, error);
        //   alert('The employee was not found or has already been deleted.');
        // } else {
        //   console.error('Error deleting employee:', error);
        //   alert('Failed to delete the employee. Please try again later.');
        // }
      }
    } else {
      console.error(`Employee with ID ${targetId} not found in local data.`);
      alert('The employee was not found in the list.');
    }
  }

  onAddEmployeeClick() {
    console.log("Cicked!")
  }

  // setOpen(modalMode: boolean) {

  // }

  // async openModal(modalMode: boolean) {
  //   const modal = await this.controller.create({
  //     component: ModalComponent,
  //     componentProps: { data: this.data }, // Pass data to modal component
  //   });
  //   await modal.present();

  //   // Listen for modal dismissal event
  //   modal.onDidDismiss().then(() => {
  //     this.isOpen = false; // Reset modal open state
  //   });

  //   this.isOpen = true; // Set modal state to open
  // }
  
  // getEmployeeDetailsById(index: number) {
  //   console.log(`${index}`)
  //   this.navigateTo(`employee/${index}`);
  // }

  // getManager(employeeId: string): string | null {
  //   const employee = this.employeeArray.find(e => e._id === employeeId);
  //   const ma = employee?.line_manager;

  //   console.log(employee);
  //   if (employee && employee.line_manager) {
  //     const manager = this.employeeArray.find(e => e._id === ma?._id);
  //     return manager ? manager.name : null;
  //   }
  //   return null;
  // }
}
