import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginComponent {
  checked = false;
  signupData = { 
    username: '', 
    email: '', 
    phone: '', 
    password: '' 
  };
  loginData = { 
    email: '', 
    password: '' 
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSignup(event: Event) {
    event.preventDefault();

    // Validation checks for signup
    if (!this.signupData.username || !this.signupData.email || !this.signupData.phone || !this.signupData.password) {
      alert('All signup fields are required.');
      return;
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(this.signupData.email)) {
      alert('Enter a valid email address.');
      return;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(this.signupData.phone)) {
      alert('Phone number should be 10 digits.');
      return;
    }
    if (this.signupData.password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }

    this.apiService.signup(this.signupData).subscribe({
      next: () => {
        alert('Signup successful');
        this.checked = false; // Switch to login form
      },
      error: (error) => {
        alert('Signup failed. Try again.');
        console.error('Signup error:', error);
      }
    });
  }

  onLogin(event: Event) {
    event.preventDefault();

    // Validation checks for login
    if (!this.loginData.email || !this.loginData.password) {
      alert('Email and password are required.');
      return;
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(this.loginData.email)) {
      alert('Enter a valid email address.');
      return;
    }
    if (this.loginData.password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }

    this.apiService.login(this.loginData).subscribe({
      next: (response: any) => {
        alert('Login successful');
        this.apiService.storeToken(response.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Login failed. Check your credentials.');
        console.error('Login error:', error);
      }
    });
  }
}
