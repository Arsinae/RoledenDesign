import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MusicElementDirective } from './music-element.directive';

@Component({
  selector: 'rd-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  @Input() playlist: Array<MusicElementDirective> = [];
  @Input() color = 'gold';

  @ViewChild('videoContainer') videoContainer;
  @ViewChild('progressBar') progressBar;

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
    this.changesDetector.detectChanges();
  }

  onPlayerError(event) {
    console.log('error', event);
  }

  changeLectureState() {
    if (this.player.getPlayerState() === this.YT.PlayerState.PLAYING) {
      this.player.pauseVideo();
      this.state = 'pause';
    } else {
      this.player.playVideo();
    }
  }

  moveSeekYoutube() {
    const timeInterval = setInterval(() => {
      if (this.state === 'play') {
        this.currentTime = Math.round(this.player.getCurrentTime());
        this.changesDetector.detectChanges();
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  changeSeek(event) {
    if (this.timeMax !== 0) {
      const percent = (event.clientX - this.progressBar.nativeElement.offsetLeft) / this.progressBar.nativeElement.clientWidth;
      const second = Math.round(this.timeMax * percent);
      this.currentTime = second;
      this.player.seekTo(second, true);
      this.changesDetector.detectChanges();
    }
  }

  getProgress() {
    if (this.currentTime === 0) {
      return '0%';
    }
    return (this.currentTime / this.timeMax) * 100 + '%';
  }

  displayTime(time) {
    const second = time % 60 < 10 ? '0' + time % 60 : time % 60;
    return (Math.floor(time / 60) + ':' + second);
  }
}
