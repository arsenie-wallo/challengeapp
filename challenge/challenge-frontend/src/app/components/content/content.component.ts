import { Component, OnInit } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { 
  IonContent,
  IonTitle,
  // IonHeader,
  IonRouterOutlet,
  // IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonRouterOutlet
  ]
})
export class ContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

// platformBrowserDynamic()
//   .bootstrapModule(EmployeePage) // Bootstrap the EmployeePage
//   .catch((err) => console.error(err));