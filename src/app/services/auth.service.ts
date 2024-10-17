import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',  // This ensures the service is available globally
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }

  async googleLogin(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      return result;
    } catch (error) {
      console.error('Error in Google login:', error);
      throw error;
    }
  }


  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
