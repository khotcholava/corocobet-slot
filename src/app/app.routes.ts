import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'slots',
        loadComponent: () =>
          import('./pages/slots/slots.component').then((c) => c.SlotsComponent),
      },
      {
        path: 'sport',
        loadComponent: () =>
          import('./pages/sport/sport.component').then((c) => c.SportComponent),
      },
      {
        path: 'casino',
        loadComponent: () =>
          import('./pages/casino/casino.component').then(
            (c) => c.CasinoComponent
          ),
      },
      {
        path: 'live',
        loadComponent: () =>
          import('./pages/live/live.component').then((c) => c.LiveComponent),
      },
    ],
  },
];
