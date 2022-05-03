import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/core/models/Track';
import {
  PlayerService,
  StreamState,
} from 'src/app/core/services/player.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  currentSongPlaying: Track | undefined;
  state: StreamState;
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.currentSongObj.subscribe((data) => {
      this.currentSongPlaying = data;
    });
    this.playerService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  playStream(file: Track) {
    this.playerService.playStream(file).subscribe((events) => {
      //console.log(events)// listening for fun here
    });
  }

  openFile(file: Track) {
    this.playerService.stop();
    this.playStream(file);
  }

  pause() {
    this.playerService.pause();
  }

  play() {
    this.playerService.play();
  }

  stop() {
    this.playerService.stop();
  }

  next() {
    if (this.playerService.list.length-1 == this.playerService.counter) {
      this.playerService.counter = 0;
    } else {
      this.playerService.counter++;
    }
    const index = this.playerService.counter;
    const file = this.playerService.list[index];
    this.playerService.currentSongObj.next(file);
    this.openFile(file);
  }

  previous() {
    if (this.playerService.counter > 0) {
      this.playerService.counter--;
    } else {
      this.playerService.counter = 0;
    }
    const index = this.playerService.counter--;
    const file = this.playerService.list[index];
    this.playerService.currentSongObj.next(file);
    this.openFile(file);
  }

  onSliderChangeEnd(change) {
    this.playerService.seekTo(change.value);
  }
}
