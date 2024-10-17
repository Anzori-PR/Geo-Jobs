import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() closePopup = new EventEmitter<void>();

  constructor() {}

  close() {
    this.closePopup.emit();
  }

}
