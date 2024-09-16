import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit{
  active: boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  visible(faq : any) {
    const faqElement = document.getElementById(faq);
    if (faqElement) {
      // Toggle between 'flex' and 'hidden' classes
      if (faqElement.classList.contains('hidden')) {
        faqElement.classList.remove('hidden');
        faqElement.classList.add('flex');
      } else {
        faqElement.classList.remove('flex');
        faqElement.classList.add('hidden');
      }
    }
  }
}
