import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from '../../models/data';

import { 
  IonBackButton,
  IonButtons,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonIcon,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-line-manager',
  templateUrl: './line-manager.page.html',
  styleUrls: ['./line-manager.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonIcon,
    IonItem,
    IonModal,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
  ]
})
export class LineManagerPage implements OnInit {
  isModalOpen = false;
  private managerArray: EmployeeModel[] = [];
  
  constructor() { }

  ngOnInit() {
    console.log(`Hello from line-manager.page.ts`);
  }
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  getAllManagers() {
    return this.managerArray
  }

  getManagerById(id: string) {
  }

  onDeleteManagerClick(id:string) {

  }

  /* Modal */ 
  cancel() {
    this.setOpen(false)
  }

  confirm () {
    this.setOpen(false)
  }
}
