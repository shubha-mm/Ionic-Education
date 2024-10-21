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
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        console.log('Signup error:', error);
      });
  }

  async googleLogin() {
    try {
      await this.authService.googleLogin();
      console.log('Google login successful');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Google login failed', error);
}
  }
}
