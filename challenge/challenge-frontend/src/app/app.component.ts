import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
// import { HttpClient } from '@angular/common/http';
// import { provideHttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    // provideHttpClient(),
  ],
  providers: [
    // provideHttpClient(),  // Move provideHttpClient() to the providers array
  ]
})
export class AppComponent {
  constructor() {}
  //private http: HttpClient
}

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Import CommonModule
// import { IonicModule } from '@ionic/angular';

// import {
//   IonApp,
//   IonRouterOutlet,
//   IonMenu,
//   IonHeader,
//   // IonToolbar,
//   // IonTitle,
//   // IonContent,
//   // IonList,
//   // IonItem,
//   // IonIcon,
//   IonLabel,
//   // IonButtons,
//   IonMenuButton,
//   IonSplitPane,
//   IonFooter,
//   // IonTabs,
//   // IonTabBar,
//   IonTabButton
// } from '@ionic/angular/standalone';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   standalone: true,

//   imports: [
//     IonApp,
//     IonRouterOutlet,
//     IonMenu,
//     IonHeader,
//     // IonToolbar,
//     // IonTitle,
//     // IonContent,
//     // IonList,
//     // IonItem,
//     // IonIcon,
//     IonLabel,
//     // IonButtons,
//     // IonMenuButton,
//     IonSplitPane,
//     IonFooter,
//     // IonTabs,
//     // IonTabBar,
//     IonTabButton,
//     CommonModule, IonicModule
//   ],
//   providers: [
//   ]
// })
// export class AppComponent {
//   constructor() {}

//   // isMobile: boolean = false;

//   // ngOnInit() {
//   //   this.checkScreenSize();
//   //   window.addEventListener('resize', () => this.checkScreenSize());
//   // }

//   // checkScreenSize() {
//   //   this.isMobile = window.innerWidth < 768; // Define mobile breakpoint (e.g., <768px)
//   // }
// }
