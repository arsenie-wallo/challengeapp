import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DepartmentModel } from '../../../models/data';
import { EmployeeModel } from '../../../models/data';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { DetailApiService } from '../../../services/api-object-handler/api-object-handler.service'

import { DepartmentPage } from '../../department/department-list/department.page'
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
  IonLabel,
  IonModal,
  IonNav,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  // DepartmentModel
} from '@ionic/angular/standalone';
// import { IonLabel, IonSelectOption } from '@ionic/angular';

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
    IonLabel,
    IonModal,
    IonNav,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRefresher,
    IonRefresherContent,
    // DepartmentModel
  ]
})
export class EmployeePage implements OnInit {
  isModalOpen = false;
  todayStr = this.generateEmployeeID()
  
  departments: DepartmentModel[] = [];
  employeeArray: EmployeeModel[] = [];
  newEmployee = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    lineManager: "",
    selectedDepartment: ""
  }

  constructor(
    private apiDetailService: DetailApiService,
    private navigator: NavigationService,
    private departmentPage: DepartmentPage,
    // private selectedDepartment: string
  ) {
    addIcons({create,trash,expand,logoIonic});

  }

  ngOnInit() {
    this.getAllEmployees()
    console.log(this.employeeArray.length)
    this.departmentPage.getAllDepartments()
    this.departments = this.departmentPage.departmentArray
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

    // Data Controls
  async onDeleteEmployeeClick(targetId: string) {
    console.log(this.employeeArray.length)
  
    let found: EmployeeModel | undefined = this.findEmployee(targetId);
  
    if (found) {
      let index = this.employeeArray.indexOf(found);
      console.log(`Employee index found: ${index}`);
      try {
        await this.apiDetailService.deleteItem(targetId, "employees")
        
        if (index !== -1) {
          this.employeeArray.splice(index, 1);
          console.log("Employee deleted successfully");
  
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
  
  // updateEmail() {
  //   const firstName = this.newEmployee.firstName.toLowerCase()
  //   const lastName = this.newEmployee.lastName !== "" ?
  //     `.${this.newEmployee.lastName.toLowerCase()}` :
  //     `${this.newEmployee.lastName.toLowerCase()}`;
  //   this.newEmployee.email = `${firstName}${lastName}@wallopay.com`;
  // }

  updateEmail() {
    const { firstName, lastName } = this.newEmployee;
    this.newEmployee.email = `${firstName.toLowerCase()}${lastName ? 
      `.${lastName.toLowerCase()}` : 
      ''}@wallopay.com`;
  }
  
  
  onDepartmentChange(event:CustomEvent) {
    const response = event.detail.value
    this.newEmployee.lineManager = response.line_manager
  }

  isFormComplete() {
    let result = 
      this.newEmployee.id !== "" 
      && this.newEmployee.email !== "" 
      && this.newEmployee.lineManager !== ""
    return result
  }
  
  confirm () {
    this.setOpen(false)
    console.log(`Creating new employee record...`)
    // Create employee
    // console.log(JSON.stringify(this.newEmployee))
    const employee = this.createEmployee()
    // const employee = JSON.stringify(this.newEmployee)

    this.apiDetailService.createItem(this.newEmployee.id, "employees", employee)
  }

  generateEmployeeID() {
    const today = new Date();
    return today.toISOString().slice(0, 10).replace(/-/g, '');
  }

  createEmployee() {
    let newEmployee: EmployeeModel = {
      _id: `${this.todayStr}-${this.newEmployee.id}`,
      email: this.newEmployee.email,
      name: `${this.newEmployee.firstName} ${this.newEmployee.lastName}`,
      address: this.newEmployee.address,
      department: this.newEmployee.selectedDepartment,
      line_manager: this.newEmployee.lineManager
    }

    this.employeeArray.push(newEmployee)
    return newEmployee
  }

  cancel() {
    this.setOpen(false)
  }
  // getManager(departmentName: string): string {
  //   const department = this.departments.find(dept => dept.name === departmentName);
  //   return department ? department.line_manager : 'Not available';  // Default if department is not found
  // }
}

