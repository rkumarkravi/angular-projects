import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  public greet: string = '';
  constructor() {}

  ngOnInit(): void {
    let date = new Date();

    if (date.getHours() >= 12 && date.getHours() <= 17) {
      this.greet = 'Good Afternoon';
    } else if (date.getHours() >= 18 && date.getHours() <= 23) {
      this.greet = 'Good Evening';
    } else if (date.getHours() >= 0 && date.getHours() <= 11) {
      this.greet = 'Good Morning';
    }
  }
}
