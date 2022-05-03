import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  albums: any;
  playlists:any;
  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.$playlists.subscribe((data:any) => {
      let playlist=data;
      if(playlist && playlist.length>6)
      playlist.length=6;
      this.playlists=playlist;
    });
    this.dataService.get('album/getAll').subscribe((data) => {
      console.log(data);
      this.albums = data;
    });
  }
}
