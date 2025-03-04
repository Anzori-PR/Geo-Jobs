import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

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
  burgerM: boolean = false;

  userData = localStorage.getItem('userData') || '{}';
  user = JSON.parse(this.userData) || '';
  token = localStorage.getItem('authToken');

  vacancy = {
    companyId: this.user?.id || '',
    category: '',
    name: '',
    logo: this.user?.companyInfo?._filename || '',
    description: '',
    location: '',
    salary: '',
    company: this.user?.companyInfo?.companyName || '',
    closingDate: new Date(),
    employmentType: '',
  };


  constructor(private router: Router, private service: DataService) { }

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
        } else if (this.currentUrl = '/Job-detail') {
          this.destination = '';
        } else if (this.currentUrl === '/CompanyInfo') {
          this.destination = 'Company Information';
        } else if (this.currentUrl = '/Company-detail') {
          this.destination = '';
        }else if (this.currentUrl === '/My-Vacancies') {
          this.destination = 'My Vacancies';
        } else {
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

  toggleBurgerMenu() {
    if(this.user && this.token){
      this.burgerM = !this.burgerM;
    }
  }

  // Click Outside function for burger menu
  @HostListener('document:click', ['$event'])
  closeBurgerMenu(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const menuElement = document.querySelector('.clickOutside');

    if (menuElement && !menuElement.contains(clickedElement)) {
      this.burgerM = false;
    }
  }

  addVacancy() {
    this.service.addVacancy(this.vacancy).subscribe({
      next: (response) => {
        this.text = "Added successfully";
        this.vacancy = {
          companyId: this.user?.id || '',
          category: '',
          name: '',
          logo: '',
          description: '',
          location: '',
          salary: '',
          company: this.user?.companyInfo?.companyName || '',
          closingDate: new Date(),
          employmentType: '',
        };
        setTimeout(() => {
          this.text = '';
          this.closeAddVacancy();
        }, 2000);
      },
      error: (error) => {
        this.text = 'Add failed: ' + error.error.error;
      }
    });
  }


  openAddVacacncy() {
    if (this.user.role === "company") {
      this.active = true;
    } else {
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

  logOut() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    window.location.href = '/';
  }
}
