import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment.development';

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

  baseImageUrl = environment.imageBaseUrl;

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

  getImageUrl(filename: string | undefined): string {
    return filename ? `${this.baseImageUrl}${filename}` : 'path/to/default-logo.png'; // Fallback image
  }
}
