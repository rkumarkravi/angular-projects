import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/models';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.scss'],
})
export class SideLeftComponent implements OnInit {
  @Input()
  userData: User | undefined;
  constructor() {}

  ngOnInit(): void {}
}
