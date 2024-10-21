import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // For Firestore
import { AngularFireStorage } from '@angular/fire/compat/storage'; // For Firebase Storage
import { finalize } from 'rxjs/operators';


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

  selectedFile: any; 

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profileImage = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.selectedFile) {
      const filePath = `profileImages/${new Date().getTime()}_${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.user.profileImage = url;
            this.saveUserData();
          });
        })
      ).subscribe();
    } else {
      this.saveUserData();
    }
  }


  saveUserData() {
    this.firestore.collection('users').doc(this.user.email).set(this.user)
      .then(() => {
        console.log('User profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile: ', error);
      });
  }
}
