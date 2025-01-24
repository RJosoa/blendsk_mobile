import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';

      this.loginService
        .login(email, password)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          console.log('Token stored:', response.data.token);
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          console.error('Login error:', error);
        });
    } else {
      console.warn('Invalid form');
    }
  }
}
