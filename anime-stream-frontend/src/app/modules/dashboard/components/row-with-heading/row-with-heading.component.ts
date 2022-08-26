import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { urlConsts } from 'src/app/core/constants/urlConstants';
import { Anime, PageableResponse } from 'src/app/core/models/pageableContent';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-row-with-heading',
  templateUrl: './row-with-heading.component.html',
  styleUrls: ['./row-with-heading.component.scss']
})
export class RowWithHeadingComponent implements OnInit {
  public allAnimes:Anime[]|null=null;
  @Input("groupName") groupName:string|undefined;
  constructor(private dataService:DataService,private router:Router,private route:ActivatedRoute) { }
  thumbnail:any;
  ngOnInit() {
    this.dataService.getPage(this.dataService.genUrl(urlConsts.getAllAnime),0,10).subscribe((data:any)=>{
      let response:PageableResponse=data;
      console.log(response.content);
      this.allAnimes=response.content;
      // this.getImage(this.allAnimes[0].videos[0].thumbnail.tblob);
    });
  }
  navigateToAnimeViewer(anime:Anime){
    this.router.navigate(['animeviewer',anime.aid],{skipLocationChange:true,relativeTo:this.route});
  }
}
