import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  data:string='login';
  loForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    uname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  });
  constructor(
    private dataService: DataService,
    private authService:AuthService,
    private snackBar:SnackbarService
  ) {}

  ngOnInit() {}

  createUser() {
    this.dataService.post("user/create",this.loForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.snackBar.openSnackBar("SignUp Successfull !","🤓");
        this.snackBar.openSnackBar("Please Login to continue!","🥺");
      },
      (error)=>{
        console.log(error);
        this.snackBar.openSnackBar("SignUp Failed !","😑");
      }
    );
  }

  loginUser(){
    this.dataService.post("user/login",this.loForm.value).subscribe(
      (data:any)=>{
        if(data.validation=='SUCCESS'){
          // this.authService.setApiKey(data.userinfo.apiKey);
          this.snackBar.openSnackBar(`Welcome ${data.userinfo.uname}!!`,"🤓",);
          // this.authService.setUserInfo(data.userinfo);
        }else{
          this.snackBar.openSnackBar("Wrong Password!","🥺");
         // this.data.type='signup';
        }
      },
      (error)=>{
        console.log(error);
        this.snackBar.openSnackBar("Login Failed !","😑");
      }
    );
  }
}
