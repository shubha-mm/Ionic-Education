import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        console.log('Login error:', error);

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
  async resetPassword() {
    const alert = await this.alertCtrl.create({
      header: 'Reset Password',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Send Reset Link',
          handler: (data) => {
            if (data.email) {
              this.authService.resetPassword(data.email);
            }
          },
        },
      ],
    });

    await alert.present();
  }
}

