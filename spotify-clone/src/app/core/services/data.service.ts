import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlConsts } from '../configs/url-consts';
@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient:HttpClient) { }

  post(url:string,data:any){
    return this.httpClient.post(urlConsts.baseurl+url,data);
  }
  get(url:string){
    return this.httpClient.get(urlConsts.baseurl+url);
  }
}
