import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Register with email/password
  Register(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
  // Login with email/password
  Login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Logout
  Logout() {
    return this.afAuth.signOut().then((result) => {
      console.log(result);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
}
