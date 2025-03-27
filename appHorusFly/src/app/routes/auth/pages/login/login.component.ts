import { Component, Signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  errorMessage = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin(): void {
    if (!this.form.valid) {
      this.errorMessage = 'completa todos los campos';
      return;
    }

    const { email, password } = this.form.value;
    this.errorMessage = '';

    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        if (response.token && response.isSuccess) {
          sessionStorage.setItem('tokenFly', response.token);
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'correo o contraseña incorrectos';
          sessionStorage.removeItem('tokenFly');
        }
      },
      error: (error) => {
        console.error('error en el login:', error);
        sessionStorage.removeItem('tokenFly');
      },
    });
  }
}
