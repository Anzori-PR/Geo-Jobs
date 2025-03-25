import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  Company: any;

  searchName: string = '';
  searchCategory: string = '';
  searchLocation: string = '';

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAllCompany().subscribe(res => {
      this.Company = res;

      this.Company.forEach((company: any) => {
        this.service.getAllVacancyByCompanyId(company.userId).subscribe(num => {
          company.numberOfVacancies = num.length;
        });
      });

    });
  }

  search() {
    this.service.searchCompany(this.searchName, this.searchCategory, this.searchLocation).subscribe(res => {
      this.Company = res;
    });
  }

}
