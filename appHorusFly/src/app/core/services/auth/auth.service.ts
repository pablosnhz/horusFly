import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { delay, finalize, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: WritableSignal<any> = signal(null);
  $userName: WritableSignal<any> = signal(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.restoreUser();
  }

  apiAuth: string = environment.apiEndpoints.urlAuth;

  login(email: string, password: string) {
    return this.http.post(this.apiAuth + '/login', { email, password }).pipe(
      tap((user: any) => {
        if (user.token) {
          this.$user.set(user);
          sessionStorage.setItem('tokenFly', user.token);
        }
      }),
    );
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.apiAuth + '/register', { name, email, password });
  }

  // recuperamos el token para que persista
  restoreUser() {
    const token = sessionStorage.getItem('tokenFly');
    if (token) {
      const user = { token };
      this.$user.set(user);
    }
  }

  // traemos el role y el userName
  getUser() {
    const token = this.getToken();
    this.http
      .get(this.apiAuth + '/users', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe((response: any) => {
        if (response) {
          const user = { userName: response.userName, role: response.role };
          // console.log(user.userName);
          this.$userName.set(user.userName);
        } else {
          console.error('error al obtener el usuario');
        }
      });
  }

  getToken(): string | null {
    return sessionStorage.getItem('tokenFly');
  }

  logout() {
    this.$user.set(null);
    sessionStorage.removeItem('tokenFly');
    this.router.navigate(['/']);
  }
}
