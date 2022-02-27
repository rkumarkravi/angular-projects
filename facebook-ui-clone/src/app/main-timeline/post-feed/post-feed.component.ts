import { Component, Input, OnInit } from '@angular/core';
import { Post, ALLOWEDFOR } from '../models/models';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss'],
})
export class PostFeedComponent implements OnInit {
  feeds: Post[] = [];
  constructor() {}

  ngOnInit(): void {
    this.feeds = [
      {
        postId: 0,
        username: 'Ravi Kumar',
        createdDate: '28-01-2022',
        tags: ['abc', 'cde', 'fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: 'https://source.unsplash.com/random/800x600?india',
        text: 'Hello World :)',
        likes: ['abc', 'cde'],
        comments: ['abc', 'cde', 'abc', 'cde', 'abc', 'cde'],
      },
      {
        postId: 0,
        username: 'Prashant Kumar',
        createdDate: '22-01-2022',
        tags: ['abc', 'cde', 'fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: '',
        text: "this is not the right practice, because your elements are available in the form, which creates a performance issue if you have large form. If my provided answer isn't helpful for you, then please let me know, I will give you an answer without rxweb approach.",
        likes: ['abc', 'cde'],
        comments: ['abc', 'cde', 'abc', 'cde', 'abc', 'cde'],
      },
      {
        postId: 0,
        username: 'Nisha Kumari',
        createdDate: '29-01-2022',
        tags: ['abc', 'cde', 'fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: 'https://source.unsplash.com/random/600x600?china',
        text: "Ok so it turns out that the reason it was compiling ok with the red error line is that this was actually just a tsLint error (other errors were shown in yellow beforehand so not sure why this one was red - must've been my theme). Anyway I solved this by declaring number as a string instead of an enum so when I casted it, it accepted it and cast the numerical value to the enum string. And it displayed properly. Shown below:",
        likes: [
          'abc',
          'cde',
          'abc',
          'cde',
          'abc',
          'cde',
          'abc',
          'cde',
          'abc',
          'cde',
          'abc',
          'cde',
        ],
        comments: ['abc', 'abc', 'cde', 'abc', 'cde'],
      },
    ];
  }
}
