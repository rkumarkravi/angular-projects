import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/core/models/UserInfo';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  login:boolean=false;
  userName: string | undefined;
  constructor(private loginService:AuthService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.login=this.loginService.getApiKey()?true:false;
    this.loginService.getUserInfo().subscribe((data:UserInfo|null)=>{
      if(data){
        this.userName=data.uname;
        this.login=true;
      }
    });
  }

  openLoginSignup(authtype:string){
    this.loginService.openLoginSignup(authtype);
  }

  logout(){
    this.loginService.removeAll();
    this.openLoginSignup('login');
  }
}
