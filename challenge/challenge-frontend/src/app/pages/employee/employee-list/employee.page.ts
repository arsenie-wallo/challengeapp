import { Component, OnInit, 
  inject
} from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeApiService } from '../../../services/api-employee/employee-api.service';
import { DetailRetrieverService } from '../../../services/detail-retriever/detail-retriever.service';
import { EmployeeModel } from '../../../models/data';


// import { NavigationService } from '../../../services/navigation/navigation.service';
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
  // data = { content: 'New Content' };
  // private message = "fsds"
  private name = "XXX"
  private employeeArray: EmployeeModel[] = [];
  // private employee: EmployeeModel | undefined = undefined;

  constructor(
    private employeeApiService: EmployeeApiService,
    // private router: Router,
    // private navigator: NavigationService,
    private retriever: DetailRetrieverService<EmployeeModel>,
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

  navigateTo(object: string) {
    
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cancel() {
    this.setOpen(false)
  }

  confirm () {
    this.setOpen(false)
  }

  onWillDismiss(event: any) {

  }

  getName() {
    return this.name
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

  onEmployeeCardClick(id: string) {
    const employee = this.findEmployee(id);
    let index;
    if (employee) {
      index = this.employeeArray.indexOf(employee)
      console.log(`retrieving details`)
      this.retriever.getDetailsById(employee, index, "employee");
      // this.getEmployeeDetailsById(index);
    }
    else {
      console.log(`Employee Not Found`)
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
