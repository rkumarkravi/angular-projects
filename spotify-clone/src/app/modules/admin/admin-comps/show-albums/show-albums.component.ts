import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';

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
  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = [
      {
        albumId: 'f813b19b-679c-4f0a-8729-f79ea53bde07',
        albumName: 'hsgjs',
        creatorName: 'kjfskdfhkjsd',
        musicFiles: [
          {
            id: '25f45b3a-80ae-48a1-8ee2-c7f716571954',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020) - Copy.mp3',
            contentType: 'audio/mpeg',
            blobId: '5439706a-5279-4dd0-8f7b-a99086894b93',
          },
          {
            id: 'f0a73965-25fc-4c6c-8168-4ec5f094875d',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020) - Copy.mp3',
            contentType: 'audio/mpeg',
            blobId: '2fccf13d-27e6-4fb3-bd6f-f8f0e7762e64',
          },
          {
            id: '59031da6-0ca5-4ac8-a3db-07ebd9e9d319',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020).mp3',
            contentType: 'audio/mpeg',
            blobId: 'b60c054b-a91f-44dd-8a31-c9260f741340',
          },
          {
            id: '75cc75ab-f0e2-458a-a512-6e2b2a247ede',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020) - Copy.mp3',
            contentType: 'audio/mpeg',
            blobId: 'e82c9ac3-1db6-4789-8d76-cd5daf9a18c5',
          },
          {
            id: 'c8834142-34b1-452c-8d83-b7bb5da25baf',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020) - Copy.mp3',
            contentType: 'audio/mpeg',
            blobId: '15e57d0a-2360-4330-8906-0ccd769cae32',
          },
          {
            id: 'a215d77e-3479-4abb-ba37-28188402c182',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020).mp3',
            contentType: 'audio/mpeg',
            blobId: '73268f19-cda5-4fa3-a0e1-5a6b5c46fa09',
          },
          {
            id: '6aee3c2d-9ad3-4c35-ae2b-a7b9116178fe',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020).mp3',
            contentType: 'audio/mpeg',
            blobId: '2aceb41f-7540-45de-b0e6-faaeba10ce11',
          },
          {
            id: '7b2c18ed-63f8-40f0-93e3-a102c223ccd5',
            name: '02 - Mere Liye Tum Kaafi Ho - SMZS (2020).mp3',
            contentType: 'audio/mpeg',
            blobId: '0a1c8fd8-6623-484b-8be6-55a51165c89e',
          },
        ],
      },
    ];
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
  name?: string;
  contentType?: string;
  albumId?: string;
  albumName?: string;
  creatorName?: string;
  blobId?: string;
  musicFiles?: MusicFile[];
}
