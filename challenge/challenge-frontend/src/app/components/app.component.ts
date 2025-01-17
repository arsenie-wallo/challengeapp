import { Component } from '@angular/core';
import { 
  IonApp,
  // IonHeader,
  // IonRouterOutlet,
  // IonContent
} from '@ionic/angular/standalone';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
// import { HomePage } from '../pages/home/home.page';
import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    // IonHeader,
    // IonRouterOutlet,
    // IonContent,

    HeaderComponent,
    ContentComponent,
    // HomePage
    IonicModule,
    // RouterModule
  ],
  providers: [
  ]
})
export class AppComponent {
  constructor() {}
}
