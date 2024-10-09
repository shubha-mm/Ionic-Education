import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Message Sent',
      message: 'Thank you for contacting us! We will get back to you soon.',
      buttons: ['OK'],
    });

    await alert.present();
    this.resetForm();
  }

  resetForm() {
    this.contact.name = '';
    this.contact.email = '';
    this.contact.message = '';
  }
}
