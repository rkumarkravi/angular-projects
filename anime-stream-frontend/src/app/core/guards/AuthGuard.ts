import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        let isAuthenticated:any=true;
        isAuthenticated = this.authService.checkAuthLogic();
        if (!isAuthenticated) {
            this.router.navigate(['/auth']);
        }
        return isAuthenticated;
  }
}
