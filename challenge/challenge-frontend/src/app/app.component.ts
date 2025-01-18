import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidePaneComponent } from './components/side-pane/side-pane.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonicModule,
    HeaderComponent,
    ContentComponent,
    SidePaneComponent
  ],
  providers: [
  ]
})
export class AppComponent {
  constructor() {}
}
