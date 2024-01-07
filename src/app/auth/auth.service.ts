import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginInterface } from '../interface/Auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  passwordMatched: boolean = true;

  //login Section
  login = (form: LoginInterface) => {
    const auth = getAuth();
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('faileed')

        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  };

  // Registeration section
  register = (form: LoginInterface) => {
    if (this.isLoading) return;
    this.isLoading = true;

    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      this.isLoading = false;
      alert("password does not match")
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('error registering this user')
        // ..
      })
      .finally(() => {
        this.isLoading = false;
      });
  };

logout = () => {
  const auth = getAuth();
  signOut(auth)
  .then(() => {
     this.router.navigate(['']);
     this.isAuthenticated = false;
  })
  .catch(() => {
   
  })
}


  };

