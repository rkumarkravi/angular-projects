import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  theme:string="Light";
  @Output() changeTheme:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeThemeEvent($event:MatSlideToggleChange ){
    this.theme=$event.checked?"Dark":"Light";
    this.changeTheme.emit($event.checked);
  }

}
