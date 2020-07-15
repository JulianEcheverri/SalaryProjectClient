import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee-model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: string = null;
  employeeList: EmployeeModel[] = [];
  employee: EmployeeModel;

  constructor(public employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  getEmployee() {
    if (this.id === null || this.id === '') {
      this.employeeServiceService.getEmployees().subscribe((resp: any) => {
        console.log(resp);
        this.employeeList = resp;
      });
    }
    else {
      this.employeeServiceService.getEmployee(this.id).subscribe((resp: any) => {
        this.employee = resp;
        this.employeeList = [];
        this.employeeList.push(this.employee);
        // console.log(this.employee);
      }, (error: any) => {
        console.log(error);
        this.employeeList = [];
      });
    }
  }

}
