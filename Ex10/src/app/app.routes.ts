import { Routes } from '@angular/router';
import { LunarConverter } from './features/lunar-converter/lunar-converter';

export const routes: Routes = [
  {
    path: 'lunar',
    component: LunarConverter,
  },
  {
    path: '',
    redirectTo: '/lunar',
    pathMatch: 'full',
  },
];
