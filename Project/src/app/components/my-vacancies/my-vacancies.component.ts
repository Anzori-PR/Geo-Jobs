import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-my-vacancies',
  templateUrl: './my-vacancies.component.html',
  styleUrls: ['./my-vacancies.component.scss']
})
export class MyVacanciesComponent implements OnInit {
  
  vacancyData: any = [];
  userData = JSON.parse(localStorage.getItem('userData') || '{}');
  deleteAlert: boolean = false;

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
}
