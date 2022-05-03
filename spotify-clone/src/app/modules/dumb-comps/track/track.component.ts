import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input("album")
  album:any;
  @Input("type")
  type:string="image-title";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateWithParam(path: string, data: any,type:string) {
    data.type=type;
    this.router.navigate([path], {
      queryParams: data,
      skipLocationChange: true,
    });
  }
}
