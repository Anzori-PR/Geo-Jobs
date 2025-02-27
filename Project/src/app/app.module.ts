import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { MyVacanciesComponent } from './components/my-vacancies/my-vacancies.component';
import { AdminDashboardComponent } from './admin_panel/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin_panel/admin-users/admin-users.component';
import { AdminVacanciesComponent } from './admin_panel/admin-vacancies/admin-vacancies.component';
import { AdminCompaniesComponent } from './admin_panel/admin-companies/admin-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    CompaniesComponent,
    ContactComponent,
    FAQComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    JobDetailComponent,
    CompanyInfoComponent,
    CompanyDetailComponent,
    MyVacanciesComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminVacanciesComponent,
    AdminCompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
