import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Info } from './pages/info/info';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: 'start',
    component: Start,
  },
  {
    path: 'info',
    component: Info,
  },
];
