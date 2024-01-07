import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';
import { LoginInterface } from '../../interface/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  form: LoginInterface = {
    email: '',
    password: '',
    confirm_password: '',
  };
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.submit(); 
    }
  }


  isLoading = () => {
    return this.authService.isLoading;
  };
  submit = () => {
    this.authService.login(this.form);
  };
}
