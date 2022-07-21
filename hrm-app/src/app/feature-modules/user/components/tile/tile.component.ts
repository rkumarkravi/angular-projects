import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  tile:Tile={  text: '', color: '',icon:'',route:'' };
  constructor() { }

  ngOnInit() {
  }

}


export interface Tile {
  color: string;
  text: string;
  icon: string;
  route:string;
}
