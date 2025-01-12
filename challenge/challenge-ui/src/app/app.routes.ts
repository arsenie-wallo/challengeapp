import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'departments',
    pathMatch: 'full',
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./pages/departments/departments.routing.module')
      // import('/pages/departments/departments.module').then((m) => m.DepartmentsPageModule),
  },
  {
    path: 'departments/:id',
    loadChildren: () =>
      import('/pages/department-details/department-details.module').then(
        (m) => m.DepartmentDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: 'home',
//     loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'departments',
//     loadComponent: () => import('./pages/departments/departments.page').then( m => m.DepartmentsPage)
//   },
//   {
//     path: 'department-details',
//     loadComponent: () => import('./pages/department-details/department-details.page').then( m => m.DepartmentDetailsPage)
//   },
// ];
