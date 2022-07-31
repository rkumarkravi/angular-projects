import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/service/data.service';
import { urlConsts } from './../../core/constants/urlConstants';
import {Anime, PageableResponse } from './../../core/models/pageableContent';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public allAnimes:Anime[]|null=null;
  constructor(private dataService:DataService,private sanitizer: DomSanitizer,private router:Router) { }
  thumbnail:any;
  ngOnInit() {
    this.dataService.getPage(this.dataService.genUrl(urlConsts.getAllAnime),0,10).subscribe((data:any)=>{
      let response:PageableResponse=data;
      console.log(response.content);
      this.allAnimes=response.content;
      // this.getImage(this.allAnimes[0].videos[0].thumbnail.tblob);
    });
  }

  getImage(baseImage:any){
    let objectURL = 'data:image/jpeg;base64,' + baseImage;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  navigateToAnimeViewer(anime:Anime){
    this.router.navigate(['animeviewer',anime.aid],{skipLocationChange:true});
  }

}
