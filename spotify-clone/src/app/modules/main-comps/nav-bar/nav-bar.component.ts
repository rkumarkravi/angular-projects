import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  login:boolean=false;
  constructor(private loginService:AuthService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.login=this.loginService.getApiKey()?true:false;
  }

  openLoginSignup(authtype:string){
    const ref:MatDialogRef<LoginComponent>=this.dialog.open(LoginComponent, {
      width: '500px',
      data: {type:authtype},
    });
    ref.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }
}
