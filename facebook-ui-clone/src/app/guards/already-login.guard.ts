import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, catchError, of } from 'rxjs';
import { CommonServService } from '../service/common-serv.service';

@Injectable({
  providedIn: 'root',
})
export class AlreadyLoginGuard implements CanActivate {
  constructor(private commonServ: CommonServService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.commonServ.getJwt() == '') {
      return true;
    }
    console.log("already login auth guard!");
    return this.commonServ.checkActiveOrNot().pipe(
      map((x: any) => {
        if (x['active'] == 'AVAILABLE') {
          this.commonServ.userData = x;
          this.router.navigateByUrl('/main-timeline');
          return false;
        }
        return true;
      })
    );
  }
}
