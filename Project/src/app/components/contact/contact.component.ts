import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = {
    from_name: '',
    from_email: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    if(this.formData.from_name === '' || this.formData.from_email === '' || this.formData.message === '') {
      this.errorMessage = "Please fill in all fields.";
      this.successMessage = '';
      return;
    }
    emailjs.send("default_service", "template_2fm4ume", this.formData, "3GL3axZMNSY9R-tl0")
      .then(() => {
        this.successMessage = "Email sent successfully!";
        this.errorMessage = '';
        this.formData = {
          from_name: '',
          from_email: '',
          message: ''
        };
      })
      .catch((error) => {
        this.errorMessage = "Failed to send email. Please try again.";
        this.successMessage = '';
      });
  }

}
