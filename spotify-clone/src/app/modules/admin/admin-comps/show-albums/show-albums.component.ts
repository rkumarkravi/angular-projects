import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-show-albums',
  templateUrl: './show-albums.component.html',
  styleUrls: ['./show-albums.component.scss'],
})
export class ShowAlbumsComponent implements OnInit {
  selectedFiles: Array<File> = [];
  treeControl = new NestedTreeControl<MusicFile>((node) => node.musicFiles);
  dataSource = new MatTreeNestedDataSource<MusicFile>();
  hasChild = (_: number, node: MusicFile) =>
    !!node.musicFiles && node.musicFiles.length > 0;
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.get("album/getAll").subscribe((res:any)=>{
      this.dataSource.data=res;
    })
  }
}

export interface Album {
  albumId: string;
  albumName: string;
  creatorName: string;
  musicFiles?: MusicFile[];
}

export interface MusicFile {
  id?: string;
  musicName?: string;
  contentType?: string;
  albumId?: string;
  albumName?: string;
  creatorName?: string;
  blobId?: string;
  musicFiles?: MusicFile[];
}
