import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config/server-url';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken = '';
  user: User = new User;

  constructor( private router: Router, private http: HttpClient) {}
  

  login(username: string, password: string) {
    const url = `${SERVER_URL}/auth/login`;
    return this.http.post(url, { username, password })
    .pipe(
      tap((res: any) => {
        this.accessToken = res.accessToken;
        this.user = res.user;
        return true;
      }),
    
      catchError(err => {
        return throwError(err);
      })
    );
  }

  logout(): void {
    this.accessToken = '';
    this.router.navigate(['/login']);
  }

  estaLogueado(): boolean {
    return this.accessToken.length > 0;
  }
}
