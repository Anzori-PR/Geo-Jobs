import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {

  userData = JSON.parse(localStorage.getItem('userData') || '{}');

  data = {
    userId: this.userData.id,
    companyInfo: {
      companyName: '',
      companyCategory: '',
      email: '',
      phone: '',
      description: '',
      address: '',
      website: '',
      socialMedia: '',
      _filename: ''
    }
  };

  constructor(private service: DataService) {}

  onSubmit() {
    this.service.updateCompany(this.data).subscribe({
      next: (response) => {
        this.userData.companyInfo = response.companyInfo;
        localStorage.setItem('userData', JSON.stringify(this.userData));

        console.log('Company info updated successfully');
      },
      error: (error) => {
        console.error('Update failed:', error.error.error);
      }
    });
  }
}
