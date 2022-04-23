import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

setApiKey(apiKey:string){
  localStorage.setItem("apiHash","api-key");
}

getApiKey(){
  return localStorage.getItem("apiHash");
}

}
