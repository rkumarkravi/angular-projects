import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ColDef,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { debounceTime } from 'rxjs';
import { UserInfo } from 'src/app/core/models/UserInfo';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss'],
})
export class CreatePlaylistComponent implements OnInit {
  @Input('showSearch') showSearch: boolean = true;
  public searchMusicForm: FormGroup = new FormGroup({
    searchField: new FormControl(''),
  });
  public searchText: string = '';
  @Input('gridData')
  public searchData = <any>[];
  playlist = <any>[];
  userInfo: UserInfo | undefined | null;
  @Input('gridCol')
  public columnDefs: ColDef[] = [
    { field: 'musicName',width:400 },
    { field: 'contentType' },
    { field: 'createdDate',width:300 },
    {
      headerName: '',
      cellRenderer: LikeSongRendererComponent,
      cellRendererParams: { playlist: this.playlist },
      width:100
    },
    {
      headerName: '',
      cellRenderer: ExtraMenuRendererComponent,
      cellRendererParams: { playlist: this.playlist },
    },
  ];
  public defaultColumnDef: ColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 60,
  };
  gridColumnApi: any;
  gridApi: any;

  constructor(
    private matDialog: MatDialog,
    private dataService: DataService,
    private authService: AuthService,
    private userService: UserService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.searchMusicForm
      .get('searchField')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((search) => {
        console.log(search);
        this.getData(search);
      });
    this.authService
      .getUserInfo()
      .subscribe((x: UserInfo | null) => (this.userInfo = x));

    this.userService.$playlists.subscribe((data) => {
      this.playlist = data;
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    this.getPlayList();
  }

  getData(queryParam: string) {
    if (queryParam)
      this.dataService.get(`search/music/${queryParam}`).subscribe((x: any) => {
        if (x.length > 0) {
          this.searchData = x;
        }
      });
  }

  getPlayList() {
    setTimeout(() => {
      this.userService.refreshPlayList(this.userInfo?.uid);
    }, 1000);
  }
}

@Component({
  selector: 'add-to-fav-component',
  template: `<button
    mat-icon-button
    aria-label="Like Song"
    (click)="addToPlayList()"
  >
    <mat-icon style="color:#4caf50;">favorite</mat-icon>
  </button>`,
})
export class LikeSongRendererComponent implements ICellRendererAngularComp {
  params: any = <any>{};
  constructor(private _bottomSheet: MatBottomSheet) {}
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  addToPlayList() {
    let playListId = this.params.context.userInfo.playlists.filter(
      (x: any) => x.name == 'Liked Songs'
    )[0]?.pid;
    console.log(
      `Add to Liked Songs...${playListId} and music Info ${this.params.data.id}`
    );
    this.params.context.dataService
      .post(`playlist/add`, {
        mid: this.params.data.id,
        pid: playListId,
      })
      .subscribe((x: any) => {
        console.log(x);
        this.params.context.loaderService.showSnackBarWithMessageAndAction(
          'Added to your liked songs!',
          'Ok',
          1
        );
      });
  }
}

@Component({
  selector: 'extra-menu-component',
  template: `
    <button
      mat-icon-button
      [matMenuTriggerFor]="menu"
      aria-label="extra menus on music track"
    >
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu" xPosition="after">
      <button mat-menu-item [matMenuTriggerFor]="playlist">
        <mat-icon>add</mat-icon>
        <span>Add to playList</span>
      </button>
    </mat-menu>
    <mat-menu #playlist="matMenu">
      <button mat-menu-item (click)="createPlayList()">Create Playlist</button>
      <mat-divider></mat-divider>
      <ng-container *ngFor="let item of params.context.playlist">
        <button mat-menu-item (click)="addToPlayList(item.pid)">
          {{ item.name }}
        </button>
      </ng-container>
    </mat-menu>
  `,
})
export class ExtraMenuRendererComponent implements ICellRendererAngularComp {
  params: any = <any>{};
  constructor(private _bottomSheet: MatBottomSheet) {}
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  createPlayList() {
    let ref: MatBottomSheetRef = this._bottomSheet.open(
      EnterNewPlayListNameComponent,
      {
        disableClose: true,
      }
    );
    ref.afterDismissed().subscribe((data) => {
      if (data) {
        this.params.context.dataService
          .post(`playlist/create`, {
            playlistName: data,
            userId: this.params.context.userInfo.uid,
            mid: this.params.data.id,
          })
          .subscribe((x: any) => {
            console.log(x);
          });
        this.params.context.getPlayList();
      } else {
        console.log('data is :' + data);
      }
    });
  }

  addToPlayList(playListId: string) {
    console.log(
      `Add to Playlist...${playListId} and music Info ${this.params.data.id}`
    );
    this.params.context.dataService
      .post(`playlist/add`, {
        mid: this.params.data.id,
        pid: playListId,
      })
      .subscribe((x: any) => {
        console.log(x);
      });
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <section>
      <div
        style="display:flex;justify-content:space-between;align-items:center;"
      >
        <b>Playlist</b>
        <button
          matSuffix
          mat-icon-button
          aria-label="Close"
          (click)="closeBottomSheet($event)"
        >
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <mat-form-field appearance="outline" style="width: 90%;padding:0 1em;">
        <mat-label>Enter playlist name..</mat-label>
        <input matInput type="text" [(ngModel)]="searchText" />
        <button
          *ngIf="searchText"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="searchText = ''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <button matSuffix mat-button aria-label="Add" (click)="savePlaylist()">
        <mat-icon>add</mat-icon> Playlist
      </button>
    </section>
  `,
})
export class EnterNewPlayListNameComponent {
  searchText: string | undefined;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<EnterNewPlayListNameComponent>
  ) {}

  closeBottomSheet(event: MouseEvent): void {
    this._bottomSheetRef.dismiss(this.searchText);
    event.preventDefault();
  }

  savePlaylist() {
    this._bottomSheetRef.dismiss(this.searchText);
  }
}
