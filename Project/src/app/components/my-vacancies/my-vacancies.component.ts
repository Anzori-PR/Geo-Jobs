import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-my-vacancies',
  templateUrl: './my-vacancies.component.html',
  styleUrls: ['./my-vacancies.component.scss']
})
export class MyVacanciesComponent implements OnInit {
  
  vacancyData: any = [];
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  deleteAlert: boolean = false;

  baseImageUrl = environment.imageBaseUrl;

  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.getAllVacancyByCompanyId(this.userData.id).subscribe({
      next: (response) => {
        this.vacancyData = response;  
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  openDeleteAlert() {
    this.deleteAlert = true;
  }

  closeDeleteAlert() {
    this.deleteAlert = false;
  }

  deleteVacancy(vacancyId: string) {
    this.service.deleteVacancy(vacancyId).subscribe({
      next: (response) => {
        this.ngOnInit();
        this.deleteAlert = false;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  getImageUrl(filename: string | undefined): string {
    return filename ? `${this.baseImageUrl}${filename}` : 'path/to/default-logo.png'; // Fallback image
  }
}
