import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


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
    profileImage: ''
  };

  constructor() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profileImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.user.fullName && this.user.email && this.user.phone && this.user.bio) {
      console.log('Form submitted successfully:', this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}
