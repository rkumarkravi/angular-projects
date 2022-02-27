import { Component, OnInit } from '@angular/core';
import { CommonServService } from 'src/app/service/common-serv.service';
import { User } from '../models/models';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss'],
})
export class PostCreatorComponent implements OnInit {
  userData: User | undefined;
  constructor(private commonServ: CommonServService) {
    this.userData = this.commonServ.userData;
  }

  ngOnInit(): void {}
}
