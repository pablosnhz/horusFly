import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage = '';

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitRegister() {
    if (!this.form.valid) {
      this.errorMessage = 'completa todos los campos';
      return;
    }
    const { name, email, password } = this.form.value;
    this.authService.register(name, email, password).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.errorMessage = 'email ya registrado, intenta con otro!';
        console.error(error);
      },
    });
  }
}
