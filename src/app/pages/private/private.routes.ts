import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent)
    },
    {
        path: 'farm',
        loadComponent: () => import('./farm-page/farm-page.component').then((m) => m.FarmPageComponent)
    },
    {
        path: 'lots',
        loadComponent: () => import('./lots-page/lots-page.component').then((m) => m.LotsPageComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];