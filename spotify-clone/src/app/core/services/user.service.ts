import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist } from '../models/Playlist';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
$playlists: BehaviorSubject<Playlist|null>=new BehaviorSubject<Playlist|null>(null);
constructor(private dataService:DataService) { }

refreshPlayList(uid:number|undefined){
  if(uid)
  this.dataService.get(`playlist/getAllPlayList/${uid}`).subscribe((data:any)=>{
    this.$playlists.next(data);
  });
}

}
