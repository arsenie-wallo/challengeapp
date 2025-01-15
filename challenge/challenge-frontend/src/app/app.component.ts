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
