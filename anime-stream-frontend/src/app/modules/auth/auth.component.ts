import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../core/service/auth.service';

@Component({
  selector: 'app-Auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signinFormGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService:AuthService) {}

  ngOnInit() {}

  signIn(){
    let data=this.signinFormGroup.value;
    console.log(data);
    this.authService.login(data.username,data.password);
  }
}
