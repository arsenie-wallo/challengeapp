// import { Component } from '@angular/core';
// import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
// import { NavigationEnd, Router, Event } from '@angular/router'
// import { Observable, filter } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
//   imports: [
//     IonApp,
//     IonRouterOutlet,
//     // provideHttpClient(),
//   ],
//   providers: [
//     // provideHttpClient(),  // Move provideHttpClient() to the providers array
//   ]
// })
// export class AppComponent {
//   public appPages = [
//     { title: 'Dashboard', url: '/folder/home', icon: 'archive' },
//     { title: 'CEO', url: '/folder/ceo', icon: 'trash' },
//     { title: 'Line Managers', url: '/folder/linemanager', icon: 'trash' },
//     { title: 'Departments', url: '/folder/departments', icon: 'mail' },
//     { title: 'Employees', url: '/folder/employees', icon: 'warning' },
//   ];

//   public labels = ['Version: '];
//   public navigationEnd: Observable<NavigationEnd>;

//   constructor(public router: Router) { 
//     this.navigationEnd = router.events.pipe(filter((event: Event) => event instanceof NavigationEnd)) as Observable<NavigationEnd>
//   }
//   ngOnInit() {
//     console.log('Hello App Component Init');
//     this.navigationEnd.subscribe((event: NavigationEnd) => {
//       console.debug(`[AppComponent][NavigationEnd][Entry]`);
//       console.debug(`[Navigation end event]`, {event})
//       console.debug(`[AppComponent][NavigationEnd][Exit]`);
//     })
//   }
// }
