import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $userInfo: BehaviorSubject<UserInfo|null>=new BehaviorSubject<UserInfo|null>(null);
  constructor() {}

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

}
