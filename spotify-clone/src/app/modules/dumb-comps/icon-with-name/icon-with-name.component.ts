import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-with-name',
  templateUrl: './icon-with-name.component.html',
  styleUrls: ['./icon-with-name.component.scss'],
})
export class IconWithNameComponent implements OnInit {
  @Input() icon: string | undefined = 'home';
  @Input() title: string | undefined = 'unknown';
  constructor() {}

  ngOnInit(): void {}
}
