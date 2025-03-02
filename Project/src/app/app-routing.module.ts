import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { MyVacanciesComponent } from './components/my-vacancies/my-vacancies.component';
import { authGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin_panel/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin_panel/admin-users/admin-users.component';
import { AdminVacanciesComponent } from './admin_panel/admin-vacancies/admin-vacancies.component';

const routes: Routes = [
  {path: '', redirectTo : 'Dashboard', pathMatch : 'full'},
  {path: 'Dashboard', component : DashboardComponent},
  {path: 'Companies', component : CompaniesComponent},
  {path: 'Contact', component : ContactComponent},
  {path: 'FAQ', component : FAQComponent},
  {path: 'CompanyInfo', component : CompanyInfoComponent},
  {path: 'Job-detail/:id', component : JobDetailComponent},
  {path: 'Company-detail/:id', component : CompanyDetailComponent},
  {path: 'My-Vacancies', component : MyVacanciesComponent},
  {path: 'Admin/Dashboard', component : AdminDashboardComponent, canActivate: [authGuard]},
  {path: 'Admin/Users', component : AdminUsersComponent, canActivate: [authGuard]},
  {path: 'Admin/Vacancies', component : AdminVacanciesComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
