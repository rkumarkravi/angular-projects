import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import {urlConsts} from '../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient:HttpClient) { }

get(path:string){
  return this.httpClient.get(urlConsts.baseurl+path).pipe(shareReplay(1));
}

post(path:string,args:any={}){
  return this.httpClient.post(urlConsts.baseurl+path,args);
}

delete(path:string){
  return this.httpClient.delete(urlConsts.baseurl+path);
}

put(path:string){
  return this.httpClient.put(urlConsts.baseurl+path,{});
}

genUrl(...paths: any[]){
  console.log(paths);
  return paths.join('/');
}

getPage(path:string,pageNo:number,pageSize:number){
  return this.httpClient.post(urlConsts.baseurl+path,{page:pageNo,size:pageSize}).pipe(shareReplay(1));
}

}
