import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  text!: string;
  Cpassword!: string;

  userData: any = {
    name: '',
    email: '',
    password: '',
    role: '',
    companyInfo: {
        companyName: 'Undefined',
        companyCategory: '',
        email: '',
        phone: '',
        description: '',
        address: '',
        website: '',
        socialMedia: '',
        _filename: ''
    }
  };

  @Output() closePopup = new EventEmitter<void>();

  constructor(private service : DataService, private router : Router) {}

  onSubmit() {
    if (this.userData.password === this.Cpassword) {
      this.service.register(this.userData).subscribe({
        next: (response) => {
          this.text = "Registration successful";
  
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userData', JSON.stringify(response.user));
  
          setTimeout(() => {
            window.location.reload();
          }, 200);
        },
        error: (error) => {
          this.text = 'Registration failed:' + ' ' + error.error.error;
        }
      })
    }else {
      this.text = 'Password does not match';
    }

    
  }

  close() {
    this.closePopup.emit();
  }

}
