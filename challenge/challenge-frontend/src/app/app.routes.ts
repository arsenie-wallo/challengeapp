import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: `${AppRoutes.DEPARTMENT}/:id`,
    loadComponent: () =>
      import('./pages/department/department-details/department-details.page').then((m) => m.DepartmentDetailsPage),
      // import('./pages/view-department/view-department.page').then((m) => m.ViewDepartmentPage),
  },
  {
    path: '',
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.LINE_MANAGER,
    loadComponent: () => import('./pages/line-manager/line-manager.page').then( m => m.LineManagerPage)
  },
  {
    path: AppRoutes.DEPARTMENT,
    loadComponent: () => import('./pages/department/department-list/department.page').then( m => m.DepartmentPage)
  },
];

