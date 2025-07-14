import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FakeAuthService } from './fake-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: FakeAuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
