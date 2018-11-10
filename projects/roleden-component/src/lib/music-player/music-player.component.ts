import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import noframe from 'reframe.js';
import { MusicElementDirective } from './music-element.directive';

@Component({
  selector: 'rd-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  @Input() playlist: Array<MusicElementDirective> = [];

  @ViewChild('videoContainer') videoContainer;

  public YT: any;
  public player: any;

  public state = 'pause';
  public timeMax = 0;
  public currentTime = 0;

  constructor(private changesDetector: ChangeDetectorRef) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('ytPlayer', {
        videoId: '6vfP_4u7zik',
        host: 'http://www.youtube.com',
        playerVars: {
          controls: 0
        },
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': this.onPlayerReady.bind(this)
        }
      });
    };
  }

  onPlayerReady(event) {
    this.timeMax = Math.round(this.player.getDuration());
  }

  onPlayerStateChange(event) {
    if (event.data === this.YT.PlayerState.PLAYING) {
      this.state = 'play';
      this.currentTime = Math.round(this.player.getCurrentTime());
      this.changesDetector.detectChanges();
      this.moveSeekYoutube();
    } else if (event.data === this.YT.PlayerState.ENDED) {
      this.state = 'ended';
    } else {
      this.state = 'pause';
    }
  }

  onPlayerError(event) {
    console.log('error', event);
  }

  changeLectureState() {
    if (this.player.getPlayerState() === this.YT.PlayerState.PLAYING) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }

  moveSeekYoutube() {
    const timeInterval = setInterval(() => {
      if (this.state === 'play') {
        this.currentTime += 1;
        console.log(this.currentTime);
        this.changesDetector.detectChanges();
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  displayTime(time) {
    const second = time % 60 < 10 ? '0' + time % 60 : time % 60;
    return (Math.floor(time / 60) + ':' + second);
  }
}
