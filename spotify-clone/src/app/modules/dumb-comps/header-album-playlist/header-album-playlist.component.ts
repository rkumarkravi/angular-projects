import { Component, Input, OnInit } from '@angular/core';
import Vibrant = require('node-vibrant')
@Component({
  selector: 'app-header-album-playlist',
  templateUrl: './header-album-playlist.component.html',
  styleUrls: ['./header-album-playlist.component.scss'],
})
export class HeaderAlbumPlaylistComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() imgSrc: string ="assets/imgs/album-default.png";
  palette: any;
  constructor() {}

  ngOnInit() {
    this.getColors();
  }

  getColors(){
    if (this.imgSrc)
    Vibrant.from(this.imgSrc).getPalette()
  .then((palette) => console.log(palette))
  }
}
