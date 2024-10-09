import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user = {
    fullName: '',
    email: '',
    phone: '',
    bio: '',
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Profile Updated',
      message: 'Your profile has been updated successfully!',
      buttons: ['OK'],
    });

    await alert.present();
    this.resetForm();
  }

  resetForm() {
    this.user.fullName = '';
    this.user.email = '';
    this.user.phone = '';
    this.user.bio = '';
  }
}
