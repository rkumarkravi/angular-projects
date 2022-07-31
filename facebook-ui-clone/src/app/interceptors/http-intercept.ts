import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CommonServService } from '../service/common-serv.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpIntercept implements HttpInterceptor {
  constructor(private service: CommonServService,private router:Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.service.getJwt) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.service.getJwt()
        ),
      });
    }
    return next.handle(req);
  }
}
