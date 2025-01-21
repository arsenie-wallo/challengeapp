import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeModel } from '../../../models/data';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { DetailApiService } from '../../../services/api-object-handler/api-object-handler.service'

import { addIcons } from 'ionicons';
import { logoIonic, create, trash, expand } from 'ionicons/icons';

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
  IonNav,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
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
    IonNav,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRefresher,
    IonRefresherContent
  ]
})
export class EmployeePage implements OnInit {
  isModalOpen = false;
  employeeArray: EmployeeModel[] = [];

  constructor(
    private apiDetailService: DetailApiService,
    private navigator: NavigationService,
  ) {
    addIcons({create,trash,expand,logoIonic});
  }

  ngOnInit() {
    // console.log(`Hello from employee.page.ts`);
    this.getAllEmployees()
    console.log(this.employeeArray.length)
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getAllEmployees() {
    this.apiDetailService.getAllItems<EmployeeModel>("employees").subscribe({
      next: (employee) => {
        if (Array.isArray(employee)) {
          this.employeeArray.push(...employee);  // Spread the array into this.employee
        }
         else {
          this.employeeArray.push(employee);
        }
      },
      error: (error) => {
        console.error('Error fetching employee data', error);
      },
    });
  }

  findEmployee(id: string) {
    return this.employeeArray.find(e => e._id === id);
  }

  getEmployeeById(id: string) {
    this.navigator.navigateTo(`dev/employees/${id}`)
  }

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

    // Data Controls
    onAddEmployeeClick() {
      console.log("Cicked!")
    }

  async onDeleteEmployeeClick(targetId: string) {
    // console.log(`Deleting a employee record ${targetId}`);
    console.log(this.employeeArray.length)
  
    // Step 1: Find the employee by targetId
    let found: EmployeeModel | undefined = this.findEmployee(targetId);
  
    // Check if employee is found in local array
    if (found) {
      // Step 2: Find the index of the employee in the array
      let index = this.employeeArray.indexOf(found);
      console.log(`Employee index found: ${index}`);
      try {
        // Step 3: Make the HTTP DELETE request using async/await
        await this.apiDetailService.deleteItem(targetId, "employees")//.toPromise(); // Convert observable to promise using toPromise()
        
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
      }
    } else {
      console.error(`Employee with ID ${targetId} not found in local data.`);
      alert('The employee was not found in the list.');
    }
  }
  
  /* Modal */ 
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  cancel() {
    this.setOpen(false)
  }
  
  confirm () {
    this.setOpen(false)
  }
}
