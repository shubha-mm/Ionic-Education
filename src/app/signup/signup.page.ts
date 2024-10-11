import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);  // Navigate to the home page on successful signup
      })
      .catch((error: any) => {
        console.log('Signup error:', error);
        // Handle signup error, e.g., show an alert
      });
  }
}
