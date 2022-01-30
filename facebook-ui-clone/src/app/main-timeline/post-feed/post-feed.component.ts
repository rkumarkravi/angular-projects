import { Component, Input, OnInit } from '@angular/core';
import { Post, ALLOWEDFOR, POSTTYPE } from '../models/posts-models';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit {
  @Input('feeds')
  feeds: Post[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
