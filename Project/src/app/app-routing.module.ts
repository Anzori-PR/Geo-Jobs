import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';

const routes: Routes = [
  {path: '', redirectTo : 'Dashboard', pathMatch : 'full'},
  {path: 'Dashboard', component : DashboardComponent},
  {path: 'Companies', component : CompaniesComponent},
  {path: 'Contact', component : ContactComponent},
  {path: 'FAQ', component : FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
