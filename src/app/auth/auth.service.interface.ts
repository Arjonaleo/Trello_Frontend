import { Observable } from 'rxjs';

export interface IAuthService {
  login(email: string, password: string): Observable<void>;
  register(username: string, email: string, password: string): Observable<void>;
  isLoggedIn(): boolean;
  logout(): void;
}
