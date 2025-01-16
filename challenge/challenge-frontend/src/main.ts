import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from "@angular/common/http";

import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';

import { AppComponent } from './app/components/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch((err) => console.error(err));
