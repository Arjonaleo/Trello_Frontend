import { Routes } from '@angular/router';

// import { AuthGuard } from './guards/auth.guard'; // Si tienes guard, descomenta

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard], // Descomenta si tienes guard para proteger esta ruta
  },

  { path: '**', redirectTo: 'auth/login' }
];
