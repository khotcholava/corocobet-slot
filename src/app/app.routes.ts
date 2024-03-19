import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'slots',
        loadComponent: () => import('./features/slots/slots.component').then(c => c.SlotsComponent)
      }
    ]
  }
];
