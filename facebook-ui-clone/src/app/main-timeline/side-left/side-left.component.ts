import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { urlConsts } from './../../consts/url-consts';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.scss'],
})
export class SideLeftComponent implements OnInit {
  @Input()
  userData: User | undefined;
  constructor(private httpsClient:HttpClient) {}

  ngOnInit(): void {}

  callUserInfo(){
    this.httpsClient.get(urlConsts.baseUrl+'userinfo').subscribe(
      data=>{
        console.log("user",data)
      }
    )
  }
}
