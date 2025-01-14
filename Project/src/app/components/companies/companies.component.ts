import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  Company: any;

  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.getAllCompany().subscribe(res => {
      this.Company = res;
      console.log(this.Company);
    });
  }

}
