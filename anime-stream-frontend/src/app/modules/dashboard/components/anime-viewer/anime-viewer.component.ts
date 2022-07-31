import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/core/models/pageableContent';
import { DataService } from './../../../../core/service/data.service';
import { urlConsts } from './../../../../core/constants/urlConstants';

@Component({
  selector: 'app-anime-viewer',
  templateUrl: './anime-viewer.component.html',
  styleUrls: ['./anime-viewer.component.scss'],
})
export class AnimeViewerComponent implements OnInit {
  animeDetails: Anime | null = null;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
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
}
