import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() closePopup = new EventEmitter<void>();
  @Output() goRegisterPopup = new EventEmitter<void>();

  constructor() {}

  close() {
    this.closePopup.emit();
  }

  goRegister() {
    console.log("qnaa")
    this.goRegisterPopup.emit();
  }
}
