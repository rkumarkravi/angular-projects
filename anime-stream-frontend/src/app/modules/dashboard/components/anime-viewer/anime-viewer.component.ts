import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/core/models/pageableContent';
import { DataService } from './../../../../core/service/data.service';
import { urlConsts } from './../../../../core/constants/urlConstants';
import { VideosNavComponent } from '../videos-nav/videos-nav.component';

@Component({
  selector: 'app-anime-viewer',
  templateUrl: './anime-viewer.component.html',
  styleUrls: ['./anime-viewer.component.scss'],
})
export class AnimeViewerComponent implements OnInit {
  animeDetails: Anime | null = null;
  @ViewChild(VideosNavComponent) videosNavComp:VideosNavComponent | undefined;
  playTrailerVal:Boolean=false;
  playingSrc:String|null=null;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router:Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((s) => {
      this.dataService
        .get(this.dataService.genUrl(urlConsts.getAnime, s['id']))
        .subscribe((res: any) => {
          console.log(res);
          if (res['status'] == 'SUCCESS') {
            this.animeDetails = res.data;
          } else {
            console.error('something Went Wrong', res.message);
          }
        });
    });
  }

  navigateBack(){
    this.playTrailerVal=false;
    this.router.navigate(['']);
  }

  addToMyList(){
  }

  playButton(){
    console.log(this.videosNavComp?.videos)
    if(this.videosNavComp?.videos){
      this.videosNavComp?.playAnimeVideo(this.videosNavComp?.videos[0].videoBlobFile?.vbId);
    }
  }

  playVideo(src:any){
    if(this.playTrailerVal)
      this.playTrailerVal=false;
    else{
      this.playTrailerVal=true;
      this.playingSrc=src;
    }
  }
}
