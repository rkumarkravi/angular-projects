import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class UserCheckInterceptor implements HttpInterceptor {
  private userInfo: UserInfo | undefined;
  constructor(public auth: AuthService, private loaderService: LoaderService) {
    this.auth.$userInfo.subscribe((data) => {
      if (data) this.userInfo = data;
    });
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.userInfo ||
      req.url.indexOf('user/create') > 0 ||
      req.url.indexOf('user/login') > 0
    ) {
      return next.handle(req);
    } else {
      this.loaderService.showSnackBarWithMessageAndAction('Pls Login !!', 'ok');
      return EMPTY;
    }
  }
}
