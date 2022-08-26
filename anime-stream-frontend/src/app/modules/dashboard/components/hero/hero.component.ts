import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/models/pageableContent';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input()
  anime: Anime | null = null;
  constructor() { }

  ngOnInit() {
  }

}
