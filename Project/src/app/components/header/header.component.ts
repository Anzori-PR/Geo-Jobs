import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUrl: string | null = null;
  destination!: string;
  newUser!: any;
  active: boolean = false;
  text!: string;
  notifi: boolean = false;

  constructor(private router: Router) { }

  userData = localStorage.getItem('userData') || '{}';
  user = JSON.parse(this.userData);
  token = localStorage.getItem('authToken');

  ngOnInit(): void {
    // get the current URL and respond to changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;

        if (this.currentUrl === '/Dashboard') {
          this.destination = 'Dashboard';
        } else if (this.currentUrl === '/Companies') {
          this.destination = 'Companies';
        } else if (this.currentUrl === '/Contact') {
          this.destination = 'Contact';
        }else if (this.currentUrl === '/Job-detail') {
          this.destination = 'Job-detail';
        }else {
          this.destination = 'FAQ'
        }
      }
    });

    
  
    if (this.user && this.token) {
      this.newUser = this.user;
    } else {
      this.newUser = '';
    }

  }

  openAddVacacncy() {
    if(this.user.role === "company") {
      this.active = true;
    }else {
      this.notifi = true;
      setTimeout(() => {
      this.notifi = false;
      }, 2000);
      this.text = "Register as a Company";
    }
  }

  closeAddVacancy() {
    this.active = false;
  }
  
}
