import { Component, OnInit, Input } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { EmployeeModel } from '../../models/employee-model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
