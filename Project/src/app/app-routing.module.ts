import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

const routes: Routes = [
  {path: '', redirectTo : 'Dashboard', pathMatch : 'full'},
  {path: 'Dashboard', component : DashboardComponent},
  {path: 'Companies', component : CompaniesComponent},
  {path: 'Contact', component : ContactComponent},
  {path: 'FAQ', component : FAQComponent},
  {path: 'Job-detail', component : JobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
