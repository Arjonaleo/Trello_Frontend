import { Injectable } from '@angular/core';
import { IAuthService } from './auth.service.interface';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FakeAuthService implements IAuthService {
  private _loggedIn = false;

  login(email: string, password: string): Observable<void> {
    if (email.includes('@') && password.length >= 6) {
      this._loggedIn = true;
      localStorage.setItem('token', 'fake-jwt-token');
      return of(void 0).pipe(delay(500));
    }
    return throwError(() => new Error('Credenciales inválidas')).pipe(delay(500));
  }

  register(username: string, email: string, password: string): Observable<void> {
    // Suponemos registro siempre exitoso
    this._loggedIn = true;
    localStorage.setItem('token', 'fake-jwt-token');
    return of(void 0).pipe(delay(500));
  }

  isLoggedIn(): boolean {
    return this._loggedIn || !!localStorage.getItem('token');
  }

  logout(): void {
    this._loggedIn = false;
    localStorage.removeItem('token');
  }
}
