import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/service/data.service';
import { urlConsts } from './../../core/constants/urlConstants';
import { Anime, PageableResponse } from './../../core/models/pageableContent';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allAnimes: Anime[] | null = null;
  indexToChange: number = 0;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit() {
    this.dataService
      .getPage(this.dataService.genUrl(urlConsts.getAllAnime), 0, 10)
      .subscribe((data: any) => {
        let response: PageableResponse = data;
        console.log(response.content);
        this.allAnimes = response.content;
        setInterval(() => {
          if (
            this.allAnimes?.length &&
            this.indexToChange == this.allAnimes?.length - 1
          ) {
            this.indexToChange = 0;
          }
          this.indexToChange++;
        }, 5 * 1000);
        // this.getImage(this.allAnimes[0].videos[0].thumbnail.tblob);
      });
  }
}
