import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = environment.apiUrl;

  constructor(private HttpClient: HttpClient) {}


  // Fetch
  getData(): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/vacancy/all`);
  }

  searchVacancy(name: string, category: string, location: string, status: string): Observable<any> {
    const params = {
      name: name,
      status: status,
      category: category,
      location: location
    };
    return this.HttpClient.get<any>(`${this.api}/vacancy/search`, { params });
  }

  getDetail(id: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/vacancy/details/${id}`);
  }

  // Authentication
  register(userData: {
    name: string; email: string; password: string; role: string;
    companyInfo: {
      companyName: string;
      companyCategory: string;
      email: string;
      phone: string;
      description: string;
      address: string;
      website: string;
      socialMedia: string;
      _filename: string;
    };
  }): Observable<any> {
    return this.HttpClient.post<any>(`${this.api}/auth/register`, userData);
  }

  login(userData: { email: string; password: string }): Observable<any> {
    return this.HttpClient.post<any>(`${this.api}/auth/login`, userData);
  }

  
  getAllUsers(): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/auth/users`);
  }

  searchUser(name: string): Observable<any> {
    const params = {
      name: name
    };
    return this.HttpClient.get<any>(`${this.api}/auth/searchUser`, { params });
  }

  getAllCompany(): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/auth/all`);
  }

  searchCompany(companyName: string, companyCategory: string, address: string): Observable<any> {
    const params = {
      companyName: companyName,
      companyCategory: companyCategory,
      address: address
    };
    return this.HttpClient.get<any>(`${this.api}/auth/search`, { params });
  }

  getCompanyById(id: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/auth/CompanyDetails/${id}`);
  }

  getCompanyVacancyNumber(id: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/auth/CompanyVacancyNumber/${id}`);
  }

  //Post vacany
  updateCompany(data: FormData): Observable<{ companyInfo: string }> {
    return this.HttpClient.put<{ companyInfo: string }>(`${this.api}/update-company`, data);
  }

  addVacancy(vacancy: {
    companyId: string,
    category: string,
    name: string,
    logo: string,
    description: string,
    location: string,
    salary: string,
    company: string,
    closingDate: Date,
    employmentType: string,
  }) {
    return this.HttpClient.post<any>(`${this.api}/vacancy/add`, vacancy);
  }

  getAllVacancyByCompanyId(companyId: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/vacancy/vacancies/${companyId}`);
  }

  deleteVacancy(vacancyId: string): Observable<any> {
    return this.HttpClient.delete<any>(`${this.api}/vacancy/delete/${vacancyId}`);
  }

  deleteUser(userId: string): Observable<any> {
    return this.HttpClient.delete<any>(`${this.api}/auth/delete/${userId}`);
  }

  approveVacancy(vacancyId: string): Observable<any> {
    return this.HttpClient.put<any>(`${this.api}/vacancy/updateApprove/${vacancyId}`, {});
  }

  rejectVacancy(vacancyId: string): Observable<any> {
    return this.HttpClient.put<any>(`${this.api}/vacancy/updateReject/${vacancyId}`, {});
  }

}

