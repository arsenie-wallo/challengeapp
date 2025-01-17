import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { IonRefresherContent } from '@ionic/angular';
import {
  RefresherCustomEvent,
  IonContent,
  IonHeader,
  IonItem,
  // IonList,
  // IonMenu,
  IonRefresher,
  IonRefresherContent,
  // IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    // IonList,
    // IonMenu,
    IonRefresher,
    IonRefresherContent,
    // IonSplitPane,
    IonTitle,
    IonToolbar
  ]
})
export class HomePage {
  constructor(private router: Router) {}
  
  ngOnInit() {
    console.log(`Hello from home.page.ts`);
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  navigateTo(page: string) {
    this.router.navigate([`${page}`]);
  }
}