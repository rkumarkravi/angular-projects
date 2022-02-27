import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { urlConsts } from '../consts/url-consts';
import { CommonServService } from '../service/common-serv.service';
import { User } from './models/models';

@Component({
  selector: 'app-main-timeline',
  templateUrl: './main-timeline.component.html',
  styleUrls: ['./main-timeline.component.scss'],
})
export class MainTimelineComponent implements OnInit, AfterViewChecked {
  userData: User | undefined;
  constructor(
    private commonServ: CommonServService,
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    if (this.router.url == '/main-timeline') {
      this.commonServ.setFooter(false);
      this.userData = this.commonServ.userData;
    }
  }
  ngAfterViewChecked(): void {}

  ngOnInit(): void {}
  signOut() {
    this.commonServ.setJwt('');
    this.commonServ.loginUser = '';
    this.commonServ.loginned = false;

    this.http
      .get(
        urlConsts.baseUrl +
          urlConsts.logoutUrl +
          this.commonServ.userData?.userid
      )
      .subscribe(
        (response: any) => {
          this.router.navigateByUrl('');
          this._snackBar.open(response.msg, 'OK', {
            duration: 3000,
          });
        },
        (error) => {
          this._snackBar.open('Something went wrong please try again!', '', {
            duration: 3000,
          });
        }
      );
  }
}
