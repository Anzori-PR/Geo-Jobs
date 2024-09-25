import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  visible: boolean = false;
  visibleR: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  login() {
    this.visible = true;
    this.visibleR = false;
  }

  register() {
    this.visibleR = true;
    this.visible = false;
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
