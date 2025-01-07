import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api: string;

  constructor(private HttpClient: HttpClient) {
    this.api = 'http://localhost:3001';
  }

  // Fetch
  getData(): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/vacancy/all`);
  }

  getDetail(id: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.api}/vacancy/details/${id}`);
  }

  // Authentication
  register(userData: { name: string; email: string; password: string; role: string; companyInfo?: object }): Observable<any> {
    return this.HttpClient.post<any>(`${this.api}/auth/register`, userData);
  }

  login(userData: { email: string; password: string }): Observable<any> {
    return this.HttpClient.post<any>(`${this.api}/auth/login`, userData);
  }

  //Post vacany
  updateCompany(data: {
    userId: string,
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
    return this.HttpClient.put<any>(`${this.api}/auth/UpdateCompany`, data);
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
}

