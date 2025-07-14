import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'; // Importa tu guard desde auth

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule),
    canActivate: [AuthGuard], // Protege dashboard para usuarios autenticados
  },

  // Cualquier otra ruta redirige a login
  { path: '**', redirectTo: 'auth/login' }
];
