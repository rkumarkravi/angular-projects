import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServService } from 'src/app/service/common-serv.service';
import { urlConsts } from 'src/app/consts/url-consts';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  brandingName: string = 'facebook clone';
  @ViewChild('signupdialog')
  userRegisterDialogTemplate!: TemplateRef<any>;
  @ViewChild('resetPasswordDialog')
  userResetPasswordDialogTemplate!: TemplateRef<any>;
  dialogReturn: any;
  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
  });
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });
  resetTime = 59;
  constructor(
    private dialog: MatDialog,
    private commonServ: CommonServService,
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        //Validators.minLength(10),
        //Validators.pattern('[a-zA-Z 0-9]*'),
      ]),
    });
  }

  openDialog(template: TemplateRef<any>) {
    let dialogHeight = '35%';
    if (window.innerWidth < 800) {
      dialogHeight = '80%';
    }
    this.dialogReturn = this.dialog.open(template, {
      width: dialogHeight,
      data: { name: 'dfsdf' },
    });
  }

  registerDialogOpen() {
    this.openDialog(this.userRegisterDialogTemplate);
  }
  resetPasswordDialogOpen() {
    this.openDialog(this.userResetPasswordDialogTemplate);
  }

  login(loginForm: FormGroup) {
    console.log('login submitted!' + loginForm.valid);
    if (!loginForm.valid) {
    } else {
      this.commonServ.loginned = true;
      this.commonServ.loginUser = loginForm.get('emailId')?.value;
      this.authenticate(
        this.loginForm.get('emailId')?.value,
        this.loginForm.get('password')?.value
      );
    }
  }

  register(registerForm: FormGroup) {
    if (!registerForm.valid) {
    } else {
      this.registerUser(registerForm);
    }
  }

  resetPassword(resetForm: FormGroup) {
    if (!resetForm.valid) {
    } else {
      this.resetForm.disable();
      this.resetPass(this.resetForm.get('email')?.value);
    }
  }

  sendOTPAgain() {
    this.resetPass(this.resetForm.get('email')?.value);
  }

  resetPass(email: string) {
    this.http
      .post(urlConsts.baseUrl + urlConsts.resetPasswordUrl, email)
      .subscribe(
        (res: any) => {
          console.log(res);
          var i = setInterval(() => {
            this.resetTime--;
          }, 1000);
          setTimeout(() => {
            clearInterval(i);
            this.resetTime = 59;
          }, 60000);
        },
        (error) => {
          console.log(error);
          this.resetForm.setValue({ emailId: '' });
          this._snackBar.open('Something went wrong!!', '', {
            duration: 3000,
          });
        }
      );
  }

  authenticate(username: string, password: string) {
    let body: any = {};
    body.username = username;
    body.password = password;
    this.http.post(urlConsts.baseUrl + urlConsts.loginUrl, body).subscribe(
      (res: any) => {
        console.log(res);
        this.commonServ.setJwt(res.jwtToken);
        if (this.commonServ.getJwt != null)
          this.router.navigateByUrl('/main-timeline');
      },
      (error) => {
        console.log(error);
        this.loginForm.setValue({ emailId: '', password: '' });
        this._snackBar.open('Wrong Credentials!!', '', {
          duration: 3000,
        });
      }
    );
  }

  registerUser(registerForm: FormGroup) {
    this.http
      .post(urlConsts.baseUrl + urlConsts.registerUrl, registerForm.value)
      .subscribe(
        (res: any) => {
          if (res.status === 'SUCCESS') {
            console.log(res);
            this._snackBar.open('Registration Successful!!', 'OK', {
              duration: 2000,
            });
            this.dialog.closeAll();
          }
        },
        (error) => {
          console.log(error);
          this.registerForm.setValue({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            gender: '',
          });
          this._snackBar.open(
            'Something Went Wrong while registering you!!',
            'X',
            {
              duration: 3000,
            }
          );
        }
      );
  }
}
