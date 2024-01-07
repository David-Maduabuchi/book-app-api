import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isAuthenticated = () => {
    return this.authService.isAuthenticated;
  };

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  logout = () => {
     this.authService.logout();
  }
}
