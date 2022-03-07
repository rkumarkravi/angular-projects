import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/Employee';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-single-emp-modify-show',
  templateUrl: './single-emp-modify-show.component.html',
  styleUrls: ['./single-emp-modify-show.component.css'],
})
export class SingleEmpModifyShowComponent implements OnInit {
  employee: Employee | any;
  action = '';
  employeeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataFromRouteAndUser();
  }
  setForm() {
    this.employeeFormGroup.get('firstName')?.setValue(this.employee?.firstName);
    this.employeeFormGroup.get('lastName')?.setValue(this.employee?.lastName);
    this.employeeFormGroup.get('email')?.setValue(this.employee?.email);
    if (this.action === 'Show User') {
      this.employeeFormGroup.disable();
    }
  }

  getDataFromRouteAndUser() {
    let url = this.router.url;
    this.setAction(url.split('/')[1]);
    if (this.action !== 'Create User') {
      let empId = this.route.snapshot.params['id'];
      if (empId) {
        this.employee = this.empService.getEmployee(empId);
        this.setForm();
      }
    }
  }

  createOrUpdate() {
    if (this.employeeFormGroup.valid) {
      let formData = this.employeeFormGroup.getRawValue();
      if (this.action === 'Create User') {
        let emp: Employee = new Employee(
          Employee.getRandom(),
          formData.firstName,
          formData.lastName,
          formData.email
        );
        this.empService.insertEmployee(emp);
        this.employeeFormGroup.reset();
      } else {
        this.employee.firstName = formData.firstName;
        this.employee.lastName = formData.lastName;
        this.employee.email = formData.email;
        this.empService.updateEmployee(this.employee);
      }
    } else {
      this.empService.showSnackBarWithMessage(
        'Please fill all mandatory fields!!'
      );
    }
  }

  goToHome() {
    this.router.navigate(['']);
  }

  setAction(url: string) {
    switch (url) {
      case 'insert':
        this.action = 'Create User';
        break;
      case 'update':
        this.action = 'Update User';
        break;
      case 'detail':
        this.action = 'Show User';
        break;
      default:
        break;
    }
  }
}
