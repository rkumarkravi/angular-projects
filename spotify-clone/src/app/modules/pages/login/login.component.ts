import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    uname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dataService: DataService,
    private authService:AuthService,
    private loaderService:LoaderService
  ) {}

  ngOnInit() {}

  createUser() {
    this.dataService.post("user/create",this.loForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.loaderService.showSnackBarWithMessageAndAction("SignUp Successfull !","Ok");
        this.data.type='login';
        this.loaderService.showSnackBarWithMessageAndAction("Please Login to continue!","Ok");
      }
    );
  }

  loginUser(){
    this.dataService.post("user/login",this.loForm.value).subscribe(
      (data:any)=>{
        if(data.validation=='SUCCESS'){
          this.authService.setApiKey(data.userinfo.apiKey);
          this.loaderService.showSnackBarWithMessageAndAction(`Welcome ${data.userinfo.uname}!!`,"Ok",);
          this.authService.setUserInfo(data.userinfo);
          this.dialogRef.close();
        }else{
          this.loaderService.showSnackBarWithMessageAndAction("Wrong Password!","Ok");
         // this.data.type='signup';
        }
      }
    );
  }
}
