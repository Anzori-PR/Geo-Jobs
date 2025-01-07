import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild(RegisterComponent) RegisterComponent!: RegisterComponent;

  visible: boolean = false;
  visibleR: boolean = false;

  auth: boolean = true;

  constructor() { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    const token = localStorage.getItem('authToken');
  
    if (user && token) {
      this.auth = false;
    } else {
      this.auth = true;
    }
  }

  login() {
    this.visible = true;
    this.visibleR = false;
  }

  register() {
    this.visibleR = true;
    this.visible = false;
  }

  logOut() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    window.location.reload();
  }

  closePopup() {
    this.visible = false;
    this.visibleR = false;
  }

  goRegisterPopup() {
    this.visible = false;
    this.visibleR = true; 
  }

}
