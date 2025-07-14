// src/app/app.module.ts
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard-module';

import { IAuthService } from './auth/auth.service.interface';
import { FakeAuthService } from './auth/fake-auth.service';
import { AuthGuard } from './auth/auth.guard';

// Token para la interfaz IAuthService
export const AUTH_SERVICE = new InjectionToken<IAuthService>('AuthService');

@NgModule({
  declarations: [
    AppComponent   // Aquí va el componente raíz, sin standalone
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule,
    DashboardModule
  ],
  providers: [
    { provide: AUTH_SERVICE, useClass: FakeAuthService },
    AuthGuard
  ],
  bootstrap: [AppComponent]  // El componente raíz en bootstrap
})
export class AppModule {}
