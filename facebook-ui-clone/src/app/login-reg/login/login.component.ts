import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('otpValidateDialog')
  userotpValidateDialogTemplate!: TemplateRef<any>;
  @ViewChild('resetPasswordDialog')
  userResetPasswordDialogTemplate!: TemplateRef<any>;
  dialogReturn: any;
  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });
  otpValidateForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    otp: new FormControl('', [Validators.pattern('[0-9]*')]),
  });
  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    confirmNewPassword: new FormControl('', [Validators.required]),
  });
  resetTime = 59;
  enableDisableSubmitReset: boolean = false;
  uidFrRstPsd: any;
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
      disableClose: true,
    });
  }

  registerDialogOpen() {
    this.openDialog(this.userRegisterDialogTemplate);
  }
  otpValidateDialogOpen() {
    this.resetAllFormForForgotPassword();
    this.openDialog(this.userotpValidateDialogTemplate);
  }
  openResetPasswordDialog() {
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

  authenticate(username: string, password: string) {
    let body: any = {};
    body.username = username;
    body.password = password;
    this.http.post(urlConsts.baseUrl + urlConsts.loginUrl, body).subscribe(
      (res: any) => {
        console.log(res);
        this.commonServ.setJwt(res.jwtToken);
        if (this.commonServ.getJwt != null){
          this.commonServ.userData=res.userInfo;
          this.router.navigateByUrl('/main-timeline');
        }
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

  register(registerForm: FormGroup) {
    if (!registerForm.valid) {
    } else {
      this.registerUser(registerForm);
    }
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

  resetAllFormForForgotPassword() {
    this.enableDisableSubmitReset = false;
    this.uidFrRstPsd = null;
    this.otpValidateForm.enable();
    this.resetPasswordForm.reset();
    this.otpValidateForm.reset();
  }

  otpValidate(resetForm: FormGroup) {
    if (!resetForm.valid) {
    } else {
      if (!this.otpValidateForm.get('otp')?.value) {
        this.emailValidateForResetPassword(
          this.otpValidateForm.get('email')?.value
        );
        this.otpValidateForm.get('email')?.disable({ onlySelf: true });
      } else {
        let req: any = {};
        req.email = this.otpValidateForm.get('email')?.value;
        req.otp = this.otpValidateForm.get('otp')?.value;
        this.validateOTP(req);
      }
    }
  }

  validateOTP(value: any) {
    this.http.post(urlConsts.baseUrl + urlConsts.otpValidate, value).subscribe(
      (res: any) => {
        console.log(res);
        this.dialog.closeAll();
        this.uidFrRstPsd = res.userid;
        this._snackBar.open(res.msg, 'OK', {
          duration: 3000,
        });
        //open resetpassword dialog for user to add new password
        this.openResetPasswordDialog();
      },
      (error) => {
        console.log(error);
        this.loginForm.setValue({ email: '', otp: '' });
        this._snackBar.open('Something went wrong please try again!', '', {
          duration: 3000,
        });
      }
    );
  }

  sendOTPAgain() {
    this.emailValidateForResetPassword(
      this.otpValidateForm.get('email')?.value
    );
  }

  emailValidateForResetPassword(email: string) {
    this.enableDisableSubmitReset = true;
    this.http
      .post(urlConsts.baseUrl + urlConsts.resetPasswordUserValidateUrl, email)
      .subscribe(
        (res: any) => {
          this.enableDisableSubmitReset = false;
          console.log(res);
          var i = setInterval(() => {
            this.resetTime--;
          }, 1000);
          setTimeout(() => {
            clearInterval(i);
            this.resetTime = 60;
          }, 60000);
        },
        (error) => {
          console.log(error);
          this.otpValidateForm.setValue({ email: '' });
          this._snackBar.open('Something went wrong!!', '', {
            duration: 3000,
          });
        }
      );
  }

  resetUserPassword(resetPasswordForm: FormGroup) {
    if (
      !resetPasswordForm.valid &&
      resetPasswordForm.get('newPassword') !=
        resetPasswordForm.get('confirmNewPassword')
    ) {
      this._snackBar.open(
        'New password and Confirm password should be same!',
        'OK',
        {
          duration: 3000,
        }
      );
    } else {
      this.resetPassword(this.resetPasswordForm?.value);
    }
  }
  @ViewChild('passwordElement') passwordElementfieldName:
    | ElementRef
    | undefined;
  resetPassword(resetPasswordFormValue: any) {
    resetPasswordFormValue.uidFrRstPsd = this.uidFrRstPsd;
    this.http
      .post(urlConsts.baseUrl + urlConsts.resetPassword, resetPasswordFormValue)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.dialog.closeAll();
          this._snackBar.open(res.msg, 'OK', {
            duration: 3000,
          });
          this.loginForm.get('emailId')?.setValue(res.userEmail);
          this.passwordElementfieldName?.nativeElement.focus();
        },
        (error) => {
          console.log(error);
          this.loginForm.setValue({ email: '', otp: '' });
          this._snackBar.open('Something went wrong please try again!', '', {
            duration: 3000,
          });
        }
      );
  }
}
