import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loader: boolean = false;
  constructor() {}
  startLoader() {
    this.loader = true;
  }
  stopLoader() {
    this.loader = false;
  }
}
