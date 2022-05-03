import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/core/models/Playlist';
import { Track } from 'src/app/core/models/Track';
import { PlayerService } from 'src/app/core/services/player.service';
import { Album } from '../../admin/admin-comps/show-albums/show-albums.component';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input('album')
  album: any;
  @Input('type')
  type: string = 'image-title';
  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {}
  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateWithParam(path: string, data: any, type: string) {
    data.type = type;
    this.router.navigate([path], {
      queryParams: data,
      skipLocationChange: true,
    });
  }

  playSong(album: any) {
    if (this.type == 'big-image-title') {
      this.playerService.initAlbum(album);
    }
  }
}
