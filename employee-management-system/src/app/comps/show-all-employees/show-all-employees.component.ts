import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-show-all-employees',
  templateUrl: './show-all-employees.component.html',
  styleUrls: ['./show-all-employees.component.css'],
})
export class ShowAllEmployeesComponent implements OnInit {
  allEmployees: Employee[] | undefined;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.allEmployees = this.employeeService.getAllEmployee();
  }

  deleteEmployee(empId: string) {
    this.employeeService.deleteEmployee(empId);
    this.getAllEmployee();
  }

  updateEmployee(empId: string) {
    this.router.navigate(['update/' + empId]);
  }

  detailEmployee(empId: string) {
    this.router.navigate(['detail/' + empId]);
  }

  insertEmployee() {
    this.router.navigate(['insert']);
  }
}
