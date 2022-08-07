import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from './../../../../core/models/pageableContent';
import { urlConsts } from './../../../../core/constants/urlConstants';

@Component({
  selector: 'app-videos-nav',
  templateUrl: './videos-nav.component.html',
  styleUrls: ['./videos-nav.component.scss'],
})
export class VideosNavComponent implements OnInit {
  @Input() videos: Video[] | undefined = [];
  @Output("playVideoEvent") playVideoEvent=new EventEmitter<string>();
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getImage(baseImage: any) {
    let objectURL = 'data:image/jpeg;base64,' + baseImage;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  playAnimeVideo(videoBlobId:any){
    this.playVideoEvent.emit(urlConsts.baseurl+urlConsts.downloadFromRes+videoBlobId);
  }
}
