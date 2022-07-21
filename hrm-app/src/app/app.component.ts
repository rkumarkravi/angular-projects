import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hrm-app';
  themeType = 'light';
  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2){

  }
  ngOnInit(): void {
    this.themeType = 'light';
    this.renderer.setAttribute(this.document.body, 'class', this.themeType);
  }
  changeTheme($event) {
    this.themeType = $event ? 'dark' : 'light';
    this.renderer.setAttribute(this.document.body, 'class', this.themeType);
    localStorage.setItem('activeTheme', this.themeType);
  }
}
