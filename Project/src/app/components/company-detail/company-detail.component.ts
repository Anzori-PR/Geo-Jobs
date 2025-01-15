import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  Data: any;
  vacancyData: any;
  id: any;
  vacancyNumber: any;

  constructor(private service : DataService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    })

    this.service.getCompanyById(this.id).subscribe(res => {
      this.Data = [res];
    })

    this.service.getAllVacancyByCompanyId(this.id).subscribe(res => {
      this.vacancyData = res;
      this.vacancyNumber = this.vacancyData.length;
    })
  }
  

}
