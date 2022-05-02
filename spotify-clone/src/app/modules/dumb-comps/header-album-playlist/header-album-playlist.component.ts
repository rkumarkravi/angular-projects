import { Component, Input, OnInit } from '@angular/core';
import Vibrant = require('node-vibrant');
import { Palette } from 'node-vibrant/lib/color';
@Component({
  selector: 'app-header-album-playlist',
  templateUrl: './header-album-playlist.component.html',
  styleUrls: ['./header-album-playlist.component.scss'],
})
export class HeaderAlbumPlaylistComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() imgSrc: string = 'assets/imgs/album-default.png';
  palette: any;
  backgrundStyle: string | undefined;
  constructor() {}

  ngOnInit() {
    this.getColors();
  }

  getColors() {
    if (this.imgSrc)
      Vibrant.from(this.imgSrc)
        .getPalette()
        .then((palette) => {console.log(palette);this.backgrundStyle=this.styleContainer(palette);});
  }

  styleContainer(palette:Palette): any {
    //console.log('palette', palette);
    if (palette && palette.LightVibrant && palette.LightMuted) {
      return { "background-color": palette.LightVibrant.getHex(),
        "background-image": "linear-gradient(269deg, "+palette.LightVibrant.getHex()+" 10%, #121212 92%)"};
    } else {
      return palette.LightMuted &&  { "background-color": palette.LightMuted.getHex(),
      "background-image": "linear-gradient(269deg, "+palette.LightMuted.getHex()+" 10%, #121212 92%)"};
    }

  }
}
