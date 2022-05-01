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
  imgSrc: string ="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e33c6e45362059.582ddfb485a00.png";
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((x: any) => {
      console.log(x);
      this.getAllMusicOfPlayList(x.params.pid);
      this.playListName=x.params.name;
    });
  }

  getAllMusicOfPlayList(id: string) {
    this.dataService.get('playlist/getTacks/' + id).subscribe((data) => {
      this.playlist = data;
    });
  }
}
