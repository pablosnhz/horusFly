import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
    if (this.form.valid) {
      console.log(this.form.value);
    }
    const { name, email, password } = this.form.value;
    this.authService.register(name, email, password).subscribe((response) => {
      console.log(`Respuesta register`, response);
      this.router.navigate(['/auth/login']);
    });
  }
}
