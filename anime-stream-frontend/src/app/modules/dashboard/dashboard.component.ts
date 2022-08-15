import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/service/data.service';
import { urlConsts } from './../../core/constants/urlConstants';
import {Anime, PageableResponse } from './../../core/models/pageableContent';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private dataService:DataService,private router:Router) { }
  ngOnInit() {
  }

}
