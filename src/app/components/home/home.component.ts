import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee-model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Searching",
      text: "Searching employees",
      icon: "info",
      allowOutsideClick: false
    });

    Swal.showLoading();
    
    if (this.id === null || this.id === '') {
      this.employeeServiceService.getEmployees().subscribe((resp: any) => {
        console.log(resp);
        this.employeeList = resp;
        Swal.close();
      });
    }
    else {
      this.employeeServiceService.getEmployee(this.id).subscribe((resp: any) => {
        this.employee = resp;
        this.employeeList = [];
        this.employeeList.push(this.employee);
        Swal.close();
        // console.log(this.employee);
      }, (error: any) => {
        Swal.fire({
          title: '',
          text: "Can't find the employee",
          icon: "error",
        });
        console.log(error);
        this.employeeList = [];
      });
    }    
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
