import { Component, Input, OnInit } from '@angular/core';
import { ALLOWEDFOR, Post, POSTTYPE } from '../models/posts-models';

@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.scss'],
})
export class PostTypeComponent implements OnInit {
  @Input('postInfo')
  postInfo!: Post;
  constructor() {}
  postType = POSTTYPE;
  ngOnInit(): void {
  }
}
