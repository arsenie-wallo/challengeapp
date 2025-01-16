import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  {
    path: 'employee-details',
    loadComponent: () => import('./pages/employee/employee-details/employee-details.page').then( m => m.EmployeeDetailsPage)
  },
  {
    path: 'employee',
    loadComponent: () => import('./pages/employee/employee-list/employee.page').then( m => m.EmployeePage)
  },
  {
    path: 'department-details',
    loadComponent: () => import('./pages/department/department-details/department-details.page').then( m => m.DepartmentDetailsPage)
  },


//   {
//     path: `department/:id`,
//     loadChildren: () =>
//       import(`./department/department-details.module`).then(
//         (module) => module.DepartmentDetailsPageModule
//       ),
//   },
//   {
//     path: AppRoutes.ADD_DEPARTMENT,
//     loadChildren: () => import(`./pages/department/add-department.module`).then( m => m.AddDepartmentPageModule)
//   },
//   {
//     path: AppRoutes.EDIT_DEPARTMENT,
//     loadChildren: () => import(`./pages/department/edit-department.module`).then( m => m.EditDepartmentPageModule)
//   },
//   {
//     path: AppRoutes.EMPLOYEES,
//     loadChildren: () => import(`./pages/employee/employee.module`).then( m => m.EmployeePageModule)
//     // loadChildren: () => import(`./pages/splash-screen/splash-screen.module`).then( m => m.SplashScreenPageModule)
//   },
//   {
//     path: `employee/:id`,
//     loadChildren: () =>
//       import(`./employee/employee-details.module`).then(
//         (module) => module.EmployeeDetailsPageModule
//       ),
//   },
//   {
//     path: AppRoutes.ADD_EMPLOYEE,
//     loadChildren: () => import(`./pages/employee/add-employee.module`).then( m => m.AddEmployeePageModule)
//   },
//   {
//     path: AppRoutes.EDIT_EMPLOYEE,
//     loadChildren: () => import(`./pages/employee/edit-employee.module`).then( m => m.EditEmployeePageModule)
//   },
];

