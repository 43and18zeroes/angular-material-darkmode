import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Angular Material Darkmode',
    loadComponent: () => import('./pages/start/start').then((m) => m.Start),
  },
  {
    path: 'start',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'info',
    title: 'Info - Angular Material Darkmode',
    loadComponent: () => import('./pages/info/info').then((m) => m.Info),
  },
  {
    path: '**',
    title: '404 - Page not found - My App Store',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
