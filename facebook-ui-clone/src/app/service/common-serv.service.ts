import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServService {
  showFooter: Subject<boolean> = new Subject();
  loginned: boolean = false;
  loginUser: string = '';
  constructor() {}

  setFooter(val: boolean) {
    this.showFooter.next(val);
  }
}
