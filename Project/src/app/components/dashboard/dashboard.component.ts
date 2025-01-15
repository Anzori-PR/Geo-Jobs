import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Data: any;
  newUser: any;
  searchName: string = '';
  searchCategory: string = '';
  searchLocation: string = '';

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      this.Data = res;
    })

    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    const token = localStorage.getItem('authToken');

    if (user && token) {
      this.newUser = user;
    } else {

    }
  }

  search() {
    this.service.searchVacancy(this.searchName, this.searchCategory, this.searchLocation).subscribe(res => {
      this.Data = res;
    })
  }


}
