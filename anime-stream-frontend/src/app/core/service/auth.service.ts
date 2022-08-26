import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { urlConsts } from '../constants/urlConstants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private snackbar: MatSnackBar,private router:Router) {}

  checkAuthLogic() {
    let accessToken = localStorage.getItem('access_token');
    let result = accessToken && accessToken.length > 0;
    return result;
  }

  login(username: string, password: string) {

    const params = new HttpParams().set("username", username).set("password",password);

    let myHeaders = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
        params:params
    }
    this.httpClient
      .post<{access_token:string,refresh_token:string}>(urlConsts.hostport + urlConsts.login, {},myHeaders)
      .subscribe(
        (res:{access_token:string,refresh_token:string}) => {
          console.log('RES::', res.access_token);
          localStorage.setItem("access_token",res.access_token);
          localStorage.setItem("refresh_token",res.refresh_token);
          this.router.navigate(['dashboard']);
        },
        (error: HttpErrorResponse) => {
          console.log('ERR::', error);
          if (error.status == 403) {
            this.snackbarShow('Invalid Credentials', 'Ok');
          }
        }
      );
  }

  snackbarShow(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 1000 });
  }
}
