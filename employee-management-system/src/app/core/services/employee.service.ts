import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACKBAR_DURATION } from '../constants/contants';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];
  constructor(private snackBar: MatSnackBar) {}

  getAllEmployee(): Employee[] {
    return this.employees;
  }

  getEmployee(empid: string): Employee {
    return this.employees.filter((e) => (e.id = empid))[0];
  }

  updateEmployee(emp: Employee) {
    let data = this.employees.find((x) => (x.id = emp.id));
    if (data) {
      data.email = emp.email;
      data.firstName = emp.firstName;
      data.lastName = emp.lastName;
      this.showSnackBarWithMessage('User Updated successfully!!');
    }
  }

  insertEmployee(employee: Employee) {
    this.employees.push(employee);
    this.showSnackBarWithMessage('User Created successfully!!');
  }

  deleteEmployee(eId: string) {
    this.employees = this.employees.filter((e) => e.id != eId);
    this.showSnackBarWithMessage('User Deleted successfully!!');
  }

  showSnackBarWithMessage(msg: string) {
    this.snackBar.open(msg, '', { duration: SNACKBAR_DURATION });
  }
}
