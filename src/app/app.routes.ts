import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    // path: 'dashboard',
    // loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },

];
