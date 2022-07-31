import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { urlConsts } from '../consts/url-consts';
import { User } from '../main-timeline/models/models';

@Injectable({
  providedIn: 'root',
})
export class CommonServService {
  showFooter: Subject<boolean> = new Subject();
  loginned: boolean = false;
  loginUser: string = '';
  private jwtToken: string = '';
  userData: User | undefined;
  constructor(private http: HttpClient) {}

  setFooter(val: boolean) {
    this.showFooter.next(val);
  }

  setJwt(token: string) {
    this.jwtToken = token;
    if (token == '') {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem('t', token);
    }
  }

  getJwt() {
    if (this.jwtToken) {
      return this.jwtToken;
    } else {
      let t = sessionStorage.getItem('t');
      return t ? t : '';
    }
  }

  checkActiveOrNot(): Observable<Object> {
    let active: boolean = false;
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const params = new HttpParams().append('t', this.getJwt());
    return this.http.post(
      urlConsts.baseUrl + urlConsts.activeOrNot,
      {},
      { headers: headers, params: params }
    ).pipe(catchError(
      error=>{
        console.log("error ",error);
        if(error.status===403){
          sessionStorage.clear();
        }
        return of({});
      }
    ));
  }
}
