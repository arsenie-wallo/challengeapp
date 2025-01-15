
import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  AppComponent } from './app.component';

// import {  NgModule, isDevMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';

// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { ComponentModule } from './component/component.module';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker'


@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule],
  exports: [AppComponent],
    // imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentModule, ServiceWorkerModule.register('ngsw-worker.js', {
//   enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
//   registrationStrategy: 'registerWhenStable:30000'
// })],
//   providers: [
//     provideHttpClient(withInterceptorsFromDi()),
//     {
//       provide: RouteReuseStrategy,
//       useClass: IonicRouteStrategy
//     }],
//   bootstrap: [AppComponent],
})
export class AppModule { }