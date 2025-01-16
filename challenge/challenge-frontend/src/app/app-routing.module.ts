import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes.enum';


const routes: Routes = [
   {
    path: ``,
    redirectTo: AppRoutes.HOME,
    pathMatch: `full`,
  },
  {
    path: AppRoutes.HOME,
    // loadChildren: () => import('./pages/home/home.module').then( m => m.HomePagePageModule)
    loadChildren: () => import(`./pages/home/home.module`).then( m => m.HomePagePageModule)

  },
  {
    path: AppRoutes.LINE_MANAGER,
    loadChildren: () => import(`./pages/line-manager/line-manager.module`).then( m => m.LineManagerPageModule)
    // loadChildren: () => import(`./line-manager.module`).then( m => m.LineManagerPageModule)
  },
  {
    path: AppRoutes.DEPARTMENT,
    loadChildren: () => import(`./pages/department/department-list/department.module`).then( m => m.DepartmentPageModule)
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
