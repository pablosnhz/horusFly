import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // apiUser: string = environment.apiEndpoints.url;
  apiAuth: string = environment.apiEndpoints.urlAuth;

  login(email: string, password: string) {
    return this.http.post(this.apiAuth + '/login', { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.apiAuth + '/register', { name, email, password });
  }
}
