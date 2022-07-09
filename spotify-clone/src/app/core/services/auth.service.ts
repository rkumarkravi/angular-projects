import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginComponent } from 'src/app/modules/pages/login/login.component';
import { UserInfo } from '../models/UserInfo';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $userInfo: BehaviorSubject<UserInfo|null>=new BehaviorSubject<UserInfo|null>(null);
  constructor(private dialog: MatDialog,private playerService:PlayerService,) {}

  setApiKey(apiKey: string) {
    localStorage.setItem('apiHash', apiKey);
  }

  getApiKey() {
    return localStorage.getItem('apiHash');
  }

  setUserInfo(userInfo:UserInfo){
    localStorage.setItem('userinfo',JSON.stringify(userInfo));
    this.$userInfo.next(userInfo);
  }

  getUserInfo(){
    let uInfo=localStorage.getItem('userinfo');
    if(uInfo){
      let userInfoData:UserInfo=JSON.parse(uInfo);
      this.$userInfo.next(userInfoData);
    }
    return this.$userInfo;
  }

  removeAll(){
    localStorage.removeItem('userinfo');
    this.$userInfo.next(null);
    this.playerService.stop();
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
