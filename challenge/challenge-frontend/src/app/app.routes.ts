import { Routes } from '@angular/router';
import { AppRoutes, AppComponentPaths } from './app.enum';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/*
 HOME = './pages/home/home.page',
  CEO = './pages/line-manager/line-manager.page',
  LINE_MANAGER = './pages/line-manager/line-manager.page',
  DEPARTMENT = './pages/department/department-list/department.page',
  DEPARTMENT_DETAILS = './pages/department/department-details/department-details.page',
  EMPLOYEES = './pages/employee/employee-list/employee.page',
  EMPLOYEE_DETAILS = './pages/employee/employee-details/employee-details.page',
*/
export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.HOME,
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: AppRoutes.CEO,
    loadComponent: () => import('./pages/line-manager/line-manager.page').then( m => m.LineManagerPage)
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
    path: AppRoutes.DEPARTMENT_DETAILS,
    loadComponent: () => import('./pages/department/department-details/department-details.page').then( m => m.DepartmentDetailsPage)
  },
  {
    path: AppRoutes.EMPLOYEES,
    loadComponent: () => import('./pages/employee/employee-list/employee.page').then( m => m.EmployeePage)
  },
  {
    path: AppRoutes.EMPLOYEE_DETAILS,
    loadComponent: () => import('./pages/employee/employee-details/employee-details.page').then( m => m.EmployeeDetailsPage)
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