import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
    {
        path: 'dashboard-page',
        loadComponent: () => import('./dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent)
    },
    {
        path: 'farm-page',
        loadComponent: () => import('./farm-page/farm-page.component').then((m) => m.FarmPageComponent)
    },
    {
        path: 'lots-page',
        loadComponent: () => import('./lots-page/lots-page.component').then((m) => m.LotsPageComponent)
    },
    {
        path: 'entrance-page',
        loadComponent: () => import('./entrance-page/entrance-page.component').then((m) => m.EntrancePageComponent)
    },
    {
        path: "visits-page",
        loadComponent: () => import('./visits-page/visits-page.component').then((m) => m.VisitsPageComponent)
    },
    {
        path: "user-page",
        loadComponent: () => import('./user-page/user-page.component').then((m) => m.UserPageComponent)
    },
    {
        path: "gtr-page",
        loadComponent: () => import('./gtr-page/gtr-page.component').then((m) => m.GtrPageComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard-page',
        pathMatch: 'full'
    }
];