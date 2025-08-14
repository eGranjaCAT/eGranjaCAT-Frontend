import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];