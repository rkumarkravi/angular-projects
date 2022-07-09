import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take, takeUntil } from 'rxjs';
import { Album } from 'src/app/modules/admin/admin-comps/show-albums/show-albums.component';
import { urlConsts } from '../configs/url-consts';
import { Track } from '../models/Track';
import { DataService } from './data.service';
import * as moment from 'moment';
import { Playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  currentSongObj: Subject<Track> = new Subject<Track>();
  list: Track[] = new Array<Track>();
  counter: number = 0;
  constructor(private dataService: DataService) {}

  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];

  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(
          this.state.duration,
          'mm:ss'
        );
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime,"mm:ss"
        );
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
    };
  }

  private streamObservable(url: string) {
    return new Observable((observer) => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  private addEvents(
    obj: HTMLAudioElement,
    events: any[],
    handler: (event: Event) => void
  ) {
    events.forEach((event) => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(
    obj: HTMLAudioElement,
    events: any[],
    handler: (event: Event) => void
  ) {
    events.forEach((event) => {
      obj.removeEventListener(event, handler);
    });
  }

  init(musicObj: Track) {
    this.currentSongObj.next(musicObj);
    if (musicObj) {
      this.playStream(musicObj).subscribe((x) => x);
    }
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next(1);
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  initAlbum(album: Album) {
    this.getAllMusicOfAlbum(album.albumId);
  }

  initPlayList(playlist: Playlist) {
    this.getAllMusicOfPlaylist(playlist.pid);
  }

  playWithAlbumId(albumId:string){
    this.getAllMusicOfAlbum(albumId);
  }

  playWithPlaylistId(playid:string){
    this.getAllMusicOfPlaylist(playid);
  }

  playStream(track: Track) {
    let url = urlConsts.baseurl + 'download/file/' + track.blobId;
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  getAllMusicOfAlbum(id: string) {
    id &&
      this.dataService.get('album/getTacks/' + id).subscribe((data: any) => {
        this.list = data;
        if (this.list.length > 0) this.init(this.list[this.counter]);
      });
  }

  getAllMusicOfPlaylist(id: string) {
    id &&
      this.dataService.get('playlist/getTacks/' + id).subscribe((data: any) => {
        this.list = data;
        if (this.list.length > 0) this.init(this.list[this.counter]);
      });
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }
}

export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined;
  currentTime: number | undefined;
  canplay: boolean;
  error: boolean;
}
