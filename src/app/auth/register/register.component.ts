import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';
import { LoginInterface } from '../../interface/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  form: LoginInterface = {
    email: '',
    password: '',
    confirm_password: '',
  };

  isLoading=() => {
    return this.authService.isLoading;
  }
  submit = () => {
    this.authService.register(this.form)
  };
}
