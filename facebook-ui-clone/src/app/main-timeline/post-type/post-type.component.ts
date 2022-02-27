import { Component, Input, OnInit } from '@angular/core';
import { ALLOWEDFOR, Post } from '../models/models';

@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.scss'],
})
export class PostTypeComponent implements OnInit {
  @Input('postInfo')
  postInfo!: Post;
  constructor() {}
  ngOnInit(): void {}
}
