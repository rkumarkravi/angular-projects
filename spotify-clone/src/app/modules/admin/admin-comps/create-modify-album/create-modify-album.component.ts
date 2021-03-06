import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userInfo } from 'os';
import { UserInfo } from 'src/app/core/models/UserInfo';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { FileService } from 'src/app/core/services/file-upload.service';

@Component({
  selector: 'app-create-modify-album',
  templateUrl: './create-modify-album.component.html',
  styleUrls: ['./create-modify-album.component.scss'],
})
export class CreateModifyAlbumComponent implements OnInit {
  public firstFormGroup: FormGroup = new FormGroup({
    albumName: new FormControl('', [Validators.required]),
    creatorName: new FormControl('', [Validators.required]),
    albumArt: new FormControl(''),
  });
  public secondFormGroup: FormGroup = new FormGroup({
    upload: new FormControl(''),
  });
  selectedFiles: Array<File> = [];
  selFiles: any = null;
  currentAid: any;
  userInfo:UserInfo|undefined|null;
  constructor(
    private fileUploadService: FileService,
    private dataSevice: DataService,
    private authService:AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.$userInfo.subscribe((data:UserInfo|null|undefined)=>{
      this.userInfo=data;
    });
  }

  fileSelectionChanged(event: Event) {
    this.selectedFiles = [];

    const element = event.currentTarget as HTMLInputElement;
    this.selFiles = element.files;

    let fileList: FileList | null = element.files;
    if (fileList) {
      for (let itm in fileList) {
        let item: File = fileList[itm];
        if (
          itm.match(/\d+/g) != null &&
          !this.selectedFiles.includes(item) &&
          item.name!.substring(item.name.lastIndexOf('.')) == '.mp3'
        ) {
          this.selectedFiles.push(item);
        }
      }
      console.log(this.selectedFiles);
      this.secondFormGroup.reset();
    }
  }

  removeSelected(item: File) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(item), 1);
  }

  eventUploadFiles() {
    let formData = new FormData();

    if (this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append(
          'files',
          this.selectedFiles[i],
          this.selectedFiles[i].name
        );
      }

      this.fileUploadService
        .filesUpload(`files/${this.currentAid}`, formData)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
            //this.uploadErrorMessage = err.error.error;
            console.log(
              this.selectedFiles.length +
                ' files not uploaded. Error: ' +
                err.error.error
            );
          }
        );
    }
  }

  createAlbum() {
    console.log(this.firstFormGroup.value);
    let albumData=this.firstFormGroup.value;
    albumData.uid=this.userInfo?.uid;
    if (this.firstFormGroup.valid)
      this.dataSevice
        .post('album/create', albumData)
        .subscribe((res: any) => {
          this.currentAid = res?.albumId;
        });
  }
}
