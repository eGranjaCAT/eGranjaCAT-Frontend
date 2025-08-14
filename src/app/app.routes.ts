import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'private',
        loadComponent: () => import('./pages/private/layout-admin/layout-admin.component').then((m) => m.LayoutAdminComponent),
        loadChildren: () => import('./pages/private/private.routes').then((m) => m.privateRoutes),
        
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/private/login-page/login-page.component').then((m) => m.LoginPageComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
