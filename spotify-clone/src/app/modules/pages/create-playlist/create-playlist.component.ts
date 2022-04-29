import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ColDef,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { debounceTime } from 'rxjs';
import { AddToPlaylistDialogComponent } from '../../main-comps/add-to-playlist-dialog/add-to-playlist-dialog.component';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss'],
})
export class CreatePlaylistComponent implements OnInit {
  public searchMusicForm: FormGroup = new FormGroup({
    searchField: new FormControl(''),
  });
  public searchText: string = '';
  public searchData = <any>[];
  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'contentType' },
    { field: 'createdDate' },
    { headerName: '', cellRenderer: ExtraMenuRendererComponent },
  ];
  gridColumnApi: any;
  gridApi: any;

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {
    this.searchMusicForm
      .get('searchField')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((search) => {
        console.log(search);
        this.searchData = this.getData(search);
      });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  getData(queryParam: string) {
    return [
      {
        id: 'afdda3f9-89af-4741-b372-00516250518b',
        name: 'abc - Bewafa.mp3',
        contentType: 'audio/mpeg',
        blobId: '9db9d21f-d803-4dd4-8e5c-ec18d5c04b22',
        published: false,
        createdDate: '2022-04-29T15:49:03.368+00:00',
      },
      {
        id: 'afdda3f9-89af-4741-b372-00516250518b',
        name: 'bck - Bewafa.mp3',
        contentType: 'audio/mpeg',
        blobId: '9db9d21f-d803-4dd4-8e5c-ec18d5c04b22',
        published: false,
        createdDate: '2022-04-29T15:49:03.368+00:00',
      },
      {
        id: 'afdda3f9-89af-4741-b372-00516250518b',
        name: 'cjkld - Bewafa.mp3',
        contentType: 'audio/mpeg',
        blobId: '9db9d21f-d803-4dd4-8e5c-ec18d5c04b22',
        published: false,
        createdDate: '2022-04-29T15:49:03.368+00:00',
      },
      {
        id: 'afdda3f9-89af-4741-b372-00516250518b',
        name: 'fjkj - Bewafa.mp3',
        contentType: 'audio/mpeg',
        blobId: '9db9d21f-d803-4dd4-8e5c-ec18d5c04b22',
        published: false,
        createdDate: '2022-04-29T15:49:03.368+00:00',
      },
    ].filter((x) => x.name.indexOf(queryParam) > 0);
  }

  addToPlayList() {
    let dialogRef: MatDialogRef<AddToPlaylistDialogComponent> =
      this.matDialog.open(AddToPlaylistDialogComponent);
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}

@Component({
  selector: 'extra-menu-component',
  template: `
    <button
      mat-icon-button
      [matMenuTriggerFor]="menu"
      aria-label="Example icon-button with a menu"
    >
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>add</mat-icon>
        <span>Add to playList</span>
      </button>
    </mat-menu>
  `,
})
export class ExtraMenuRendererComponent implements ICellRendererAngularComp {
  params: ICellRendererParams = <any>{};
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
}
