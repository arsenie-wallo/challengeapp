import { Routes } from '@angular/router';
import { AppRoutes, AppComponentPaths } from './app.enum';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.HOME,
    pathMatch: 'full',
    loadComponent: () => import(AppComponentPaths.HOME).then((m) => m.HomePage),
  },
  {
    path: AppRoutes.DEPARTMENT,
    loadComponent: () => import(AppComponentPaths.DEPARTMENT).then( m => m.DepartmentPage)
  },
  {
    path: AppRoutes.DEPARTMENT_DETAILS,
    loadComponent: () => import(AppComponentPaths.DEPARTMENT_DETAILS).then( m => m.DepartmentDetailsPage)
  },
  {
    path: AppRoutes.EMPLOYEES,
    loadComponent: () => import(AppComponentPaths.EMPLOYEES).then( m => m.EmployeePage)
  },
  {
    path: AppRoutes.EMPLOYEE_DETAILS,
    loadComponent: () => import(AppComponentPaths.EMPLOYEE_DETAILS).then( m => m.EmployeeDetailsPage)
  },
  {
    path: AppRoutes.LINE_MANAGER,
    loadComponent: () => import(AppComponentPaths.LINE_MANAGER).then( m => m.LineManagerPage)
  },
  {
    path: AppRoutes.CEO,
    loadComponent: () => import(AppComponentPaths.CEO).then( m => m.LineManagerPage)
  },
];


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