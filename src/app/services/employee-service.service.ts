import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  // Api url
  private readonly apiUrl = 'https://localhost:44366/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEmployee(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}