import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  uid:String="";
  constructor(private router: Router,private dataService:DataService) {}

  ngOnInit(): void {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  getAllPlayList(){
    this.dataService.get(`playlist/getAllPlayList/${this.uid}`).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
