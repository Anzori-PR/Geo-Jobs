import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter<void>();
  @Output() goRegisterPopup = new EventEmitter<void>();

  userData = {
    email: '',
    password: ''
  };

  text!: string;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.service.login(this.userData).subscribe({
      next: (response) => {
        this.text = "Login successful";

        if (response?.token && response.user) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userData', JSON.stringify(response.user));

          setTimeout(() => {
            window.location.href = '/';
          }, 0);
        }else{
          sessionStorage.setItem('role', response.role);
        }

        if (response.role === 'admin') {
          window.location.href = '/Admin/Dashboard';
          this.close();
        }

      },
      error: (error) => {
        if (error.status === 400) {
          this.text = 'Invalid email or password';
        } else {
          this.text = 'Login failed: ' + (error?.error?.error || 'An unexpected error occurred');
        }
      }
    })
  }

  close() {
    this.closePopup.emit();
  }

  goRegister() {
    this.goRegisterPopup.emit();
  }
}
