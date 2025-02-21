import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeState } from '../services/employee.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-info',
  imports: [CommonModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.scss'
})
export default class EmployeeInfoComponent {
  constructor(
    private employeeState:EmployeeState
  ){}

  employeeList(){
    this.employeeState.getEmployees()
  }

}
