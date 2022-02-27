import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServService } from '../service/common-serv.service';

@Component({
  selector: 'app-main-timeline',
  templateUrl: './main-timeline.component.html',
  styleUrls: ['./main-timeline.component.scss'],
})
export class MainTimelineComponent implements OnInit, AfterViewChecked {
  constructor(private commonServ: CommonServService, private router: Router) {
    if (this.router.url == '/main-timeline') {
      this.commonServ.setFooter(false);
    }
  }
  ngAfterViewChecked(): void {}

  ngOnInit(): void {}
  signOut() {
    this.commonServ.setJwt('');
    this.commonServ.loginUser = '';
    this.commonServ.loginned = false;
    this.router.navigateByUrl('');
  }
}
