import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {

  text: string = '';

  logoPreview: string | null = null;
  selectedFile: File | null = null;

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

  constructor(private service: DataService) {
    if (this.data.companyInfo._filename) {
      this.logoPreview = `http://localhost:3001/uploads/company-logos/${this.data.companyInfo._filename}`;
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // onSubmit() {
  //   this.service.updateCompany(this.data).subscribe({
  //     next: (response) => {
  //       this.userData.companyInfo = response.companyInfo;
  //       localStorage.setItem('userData', JSON.stringify(this.userData));
  //       this.text = 'Company information updated successfully!';
  //       setTimeout(() => {
  //         this.text = '';
  //       }, 2000);
  //     },
  //     error: (error) => {
  //       console.error('Update failed:', error.error.error);
  //     }
  //   });
  // }
  
  onSubmit() {
    const formData = new FormData();
    formData.append('userId', this.data.userId);
    formData.append('companyInfo', JSON.stringify(this.data.companyInfo));
    if (this.selectedFile) {
      formData.append('companyLogo', this.selectedFile);
    }

    this.service.updateCompany(formData).subscribe({
      next: (response) => {
        this.userData.companyInfo = response.companyInfo;
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.text = 'Company information updated successfully!';
        this.selectedFile = null; // Reset file input
        setTimeout(() => {
          this.text = '';
        }, 2000);
      },
      error: (error) => {
        console.error('Update failed:', error.error.error);
        this.text = 'Failed to update company information';
      }
    });
  }
}
