import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'department/:id',
    loadComponent: () =>
      import('./pages/view-department/view-department.page').then((m) => m.ViewDepartmentPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'line-manager',
    loadComponent: () => import('./pages/line-manager/line-manager.page').then( m => m.LineManagerPage)
  },  {
    path: 'department',
    loadComponent: () => import('./pages/department/department.page').then( m => m.DepartmentPage)
  },


];

