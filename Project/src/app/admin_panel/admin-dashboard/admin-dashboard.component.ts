import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  companyCount : number = 0;
  vacancyCount : number = 0;
  vacancyData: any[] = [];
  userCount : number = 0;
  users: any[] = [];

  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.getAllCompany().subscribe((data) => {
      this.companyCount = data.length;
    });

    this.service.getData().subscribe((data) => {
      this.vacancyData = data;
      this.vacancyCount = data.length;
    });

    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
      this.userCount = data.length;
    });
  }

  logOut() {
    sessionStorage.removeItem('role');
    window.location.href = '/';
  }

}
