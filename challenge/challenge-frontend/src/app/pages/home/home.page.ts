import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { routes } from '../../app.routes';
import { 
  // IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonMenu,
  IonContent,
  IonItem,
  // IonLabel,
  IonSplitPane
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    // IonRouterOutlet,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonMenu,
    IonContent,
    IonItem,
    // IonLabel,
    IonSplitPane
  ]
})
export class HomePage {
  constructor(private router: Router) {}
  
  ngOnInit() {
    console.log(`Hello from home.page.ts`);
  }
  navigateTo(page: string) {
    this.router.navigate([`${page}`]);
  }
}