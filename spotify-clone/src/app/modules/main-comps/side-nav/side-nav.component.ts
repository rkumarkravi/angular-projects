import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/core/models/UserInfo';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  playlists: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe((data: UserInfo | null) => {
      this.getAllPlayList(data?.uid);
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateWithParam(path: string, data: any) {
    this.router.navigate([path], {
      queryParams: data,
      skipLocationChange: true,
    });
  }

  getAllPlayList(uid: number | undefined) {
    this.userService.refreshPlayList(uid);
    this.userService.$playlists.subscribe((data) => {
      this.playlists = data;
    });
  }
}
