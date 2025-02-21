import { Injectable } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { map, take } from "rxjs";

@Injectable({
    providedIn: 'root',
  })

  export class EmployeeState{
    constructor(
        private _employeeService:EmployeeService,

    ){}

    getEmployees(){
        this._employeeService.getEmployees()
    }
  }