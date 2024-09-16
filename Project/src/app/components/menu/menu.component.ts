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
  }

  register() {
    this.visibleR = true;
  }

  closePopup() {
    this.visible = false;
    this.visibleR = false;
  }

}
