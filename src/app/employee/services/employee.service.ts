import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private employeeApiUrl ='http://localhost:8081/api/employees';

  //Get Employee List
  getEmployees() {

     this.http.get(this.employeeApiUrl).subscribe({
      next: data => data,
      error: error => console.log("error: ", error),
      complete:() => console.error('Done')
  });
  }

}
