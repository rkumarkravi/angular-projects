import {
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { CommonServService } from '../service/common-serv.service';
import { ALLOWEDFOR, Post, POSTTYPE } from './models/posts-models';

@Component({
  selector: 'app-main-timeline',
  templateUrl: './main-timeline.component.html',
  styleUrls: ['./main-timeline.component.scss'],
})
export class MainTimelineComponent implements OnInit, AfterViewChecked {
  feeds:Post[]=[];
  constructor(private com: CommonServService) {}
  ngAfterViewChecked(): void {
    setTimeout(()=>this.com.setFooter(false),100);
  }

  ngOnInit(): void {
    this.feeds = [
      {
        postId: 0,
        username: 'abc',
        createdDate: '28-01-2022',
        tags: ['abc','cde','fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: '',
        text: 'Hello World :)',
        postType: POSTTYPE.NORMAL,
        likes: ['abc','cde'],
        comments: ['abc','cde','abc','cde','abc','cde'],
      },{
        postId: 0,
        username: 'cde',
        createdDate: '22-01-2022',
        tags: ['abc','cde','fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: '',
        text: 'this is not the right practice, because your elements are available in the form, which creates a performance issue if you have large form. If my provided answer isn\'t helpful for you, then please let me know, I will give you an answer without rxweb approach.',
        postType: POSTTYPE.NORMAL,
        likes: ['abc','cde'],
        comments: ['abc','cde','abc','cde','abc','cde'],
      },{
        postId: 0,
        username: 'fgh',
        createdDate: '29-01-2022',
        tags: ['abc','cde','fgh'],
        allowed: ALLOWEDFOR.ALL,
        imageSrc: '',
        text: 'Ok so it turns out that the reason it was compiling ok with the red error line is that this was actually just a tsLint error (other errors were shown in yellow beforehand so not sure why this one was red - must\'ve been my theme). Anyway I solved this by declaring number as a string instead of an enum so when I casted it, it accepted it and cast the numerical value to the enum string. And it displayed properly. Shown below:',
        postType: POSTTYPE.NORMAL,
        likes: ['abc','cde','abc','cde','abc','cde','abc','cde','abc','cde','abc','cde'],
        comments: ['abc','abc','cde','abc','cde'],
      },
    ];
  }
}
