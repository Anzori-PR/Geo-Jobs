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


  constructor(private router: Router) { }

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
        }else {
          this.destination = 'FAQ'
        }

      }
    });
  }
}
