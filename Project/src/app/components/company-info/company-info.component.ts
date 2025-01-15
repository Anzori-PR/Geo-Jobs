import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {

  text: string = '';

  userData = JSON.parse(localStorage.getItem('userData') || '{}');

  data = {
    userId: this.userData.id,
    companyInfo: {
      companyName: this.userData.companyInfo.companyName,
      companyCategory: this.userData.companyInfo.companyCategory,
      email: this.userData.companyInfo.email,
      phone: this.userData.companyInfo.phone, 
      description: this.userData.companyInfo.description,
      address: this.userData.companyInfo.address,
      website: this.userData.companyInfo.website,
      socialMedia: this.userData.companyInfo.socialMedia,
      _filename: this.userData.companyInfo._filename
    }
  };

  constructor(private service: DataService) {}

  onSubmit() {
    this.service.updateCompany(this.data).subscribe({
      next: (response) => {
        this.userData.companyInfo = response.companyInfo;
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.text = 'Company information updated successfully!';
        setTimeout(() => {
          this.text = '';
        }, 2000);
      },
      error: (error) => {
        console.error('Update failed:', error.error.error);
      }
    });
  }

  onFileChange(event: any) {

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      console.log('File selected:', file.name);

    }
  }
}
