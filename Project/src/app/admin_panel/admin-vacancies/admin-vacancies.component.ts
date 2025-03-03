import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-vacancies',
  templateUrl: './admin-vacancies.component.html',
  styleUrls: ['./admin-vacancies.component.scss']
})
export class AdminVacanciesComponent implements OnInit {
  vacancyData: any;
  deleteAlert: boolean = false; 
  searchName: string = '';
  searchCategory: string = '';
  searchLocation: string = '';
  status: string = '';

  baseImageUrl = environment.imageBaseUrl;

  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.vacancyData = data;
    });
  }


  deleteVacancyById(id: any){
    this.service.deleteVacancy(id).subscribe((data) => {
      window.location.href = '/Admin/Vacancies';
    });
  }

  searchVacancy() {
    this.service.searchVacancy(this.searchName, this.searchCategory, this.searchLocation, this.status).subscribe(res => {
      this.vacancyData = res;
    })

  }
  
  logOut() {
    sessionStorage.removeItem('role');
    window.location.href = '/Dashboard';
  }

  approveVacancy(id: any){  
    this.service.approveVacancy(id).subscribe((data) => {
      window.location.href = '/Admin/Vacancies';
    });
  }

  rejectVacancy(id: any){
    this.service.rejectVacancy(id).subscribe((data) => {
      window.location.href = '/Admin/Vacancies';
    });
  }

  getImageUrl(filename: string | undefined): string {
    return filename ? `${this.baseImageUrl}${filename}` : 'path/to/default-logo.png'; // Fallback image
  }

}
