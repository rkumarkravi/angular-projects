import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  gridColumnApi: any;
  gridApi: any;
  playlist: any;
  playListName:string|undefined;
  imgSrc: string ="assets/imgs/album-default.png";
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((x: any) => {
      console.log(x);
      if(x.params.type==='album'){
        this.imgSrc=x.params.albumArt;
        this.getAllMusicOfAlbum(x.params.albumId);
        this.playListName=x.params.albumName;
      }else{
        this.getAllMusicOfPlayList(x.params.pid);
        this.playListName=x.params.name;
      }
    });
  }

  getAllMusicOfPlayList(id: string) {
    id &&
    this.dataService.get('playlist/getTacks/' + id).subscribe((data) => {
      this.playlist = data;
    });
  }

  getAllMusicOfAlbum(id: string){
    id &&
    this.dataService.get('album/getTacks/' + id).subscribe((data) => {
      this.playlist = data;
    });
  }
}
