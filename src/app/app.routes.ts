import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./shared/auth/login/login').then(m => m.Login)
    }
];
