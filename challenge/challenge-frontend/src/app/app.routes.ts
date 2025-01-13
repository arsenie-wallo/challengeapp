import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'employee/:id',
    loadComponent: () =>
      import('./view-employee/view-employee.page').then((m) => m.ViewEmployeePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

