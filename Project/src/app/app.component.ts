import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Project';
  admin: boolean = false;

  ngOnInit() { 
    const role = sessionStorage.getItem('role');
    if (role === 'admin') {
      this.admin = true;
    } else {
      this.admin = false; 
    }
  }

}
