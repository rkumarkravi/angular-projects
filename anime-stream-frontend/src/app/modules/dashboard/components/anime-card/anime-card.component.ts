import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/pageableContent';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
})
export class AnimeCardComponent implements OnInit {
  @Input()
  animedata: Anime | null = null;
  constructor() {}

  ngOnInit() {}
}
