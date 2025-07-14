// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';      // Ajusta la ruta y el nombre aquí
import { routes } from './app.routes';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard-module';

import { IAuthService } from './auth/auth.service.interface';
import { FakeAuthService } from './auth/fake-auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent  // Aquí va el componente raíz, no tu módulo
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
    { provide: IAuthService, useClass: FakeAuthService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
