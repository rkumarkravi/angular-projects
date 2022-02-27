import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
  constructor() {}

  setFooter(val: boolean) {
    this.showFooter.next(val);
  }

  setJwt(token: string) {
    this.jwtToken = token;
  }

  getJwt() {
    return this.jwtToken;
  }
}
