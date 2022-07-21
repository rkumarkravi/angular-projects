import { Component, OnInit } from '@angular/core';
import { Tile } from './components/tile/tile.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Absence', color: '#5465ff',icon:'add_circle',route:'absence'},
    {text: 'Two',color: '#5465ff',icon:'radio_button_checked',route:'two'},
    {text: 'Todo',color: '#5465ff',icon:'chat_add_on',route:'todos'},
    {text: 'Profile', color: '#5465ff',icon:'account_circle',route:'profile'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

