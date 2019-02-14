import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, OnChanges } from '@angular/core';
import { MusicElementDirective } from './music-element.directive';
import { Howl } from 'howler';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnChanges {

  @Input() playlist: Array<MusicElementDirective> = [];
  @Input() color = 'gold';

  @ViewChild('videoContainer') videoContainer;
  @ViewChild('playerWrapper') playerWrapper;
  @ViewChild('playlistMenu') playlistMenu;
  @ViewChild('progressBar') progressBar;

  public localPlaylist: Array<MusicElementDirective> = [];
  public cursor = 0;

  public player: any = null;

  public sound: Howl = null;

  public state = 'pause';
  public timeMax = 0;
  public currentTime = 0;

  public random = false;
  public volume = 50;

  public dark = false;

  constructor(private changesDetector: ChangeDetectorRef, private darkService: DarkService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = (e) => {
      if (this.playlist.length > 0) {
        this.localPlaylist = this.playlist.slice();
        if (this.currentSongType() === 'youTube') {
          this.initYoutubeVideo(this.localPlaylist[this.cursor]);
        } else {
          this.initFreesoundAudio(this.localPlaylist[this.cursor], false);
        }
      }
    };
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  ngOnChanges(changes) {
    if (changes['playlist']) {
      this.localPlaylist = this.playlist.slice();
      if (this.random) {
        this.shufflePlaylist();
      }
    }
  }

  currentSongType() {
    return this.localPlaylist[this.cursor].type;
  }

  initYoutubeVideo(video) {
    this.player = new window['YT'].Player('ytPlayer', {
      videoId: video.url,
      host: 'http://www.youtube.com',
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this)
      }
    });
  }

  onPlayerReady(event) {
    this.player.setVolume(this.volume);
  }

  onPlayerStateChange(event) {
    if (event.data === window['YT'].PlayerState.PLAYING) {
      this.timeMax = Math.round(this.player.getDuration());
      this.state = 'play';
      this.currentTime = Math.round(this.player.getCurrentTime());
      this.changesDetector.detectChanges();
      this.moveSeek();
    } else if (event.data === window['YT'].PlayerState.ENDED) {
      this.state = 'ended';
      this.changeSong(1);
    } else {
      this.state = 'pause';
    }
    this.changesDetector.detectChanges();
  }

  onPlayerError(event) {
    console.log('error', event);
  }

  initFreesoundAudio(audio, autoplay) {
    this.sound = new Howl({
      src: [audio.url],
      volume: this.volume / 100,
      onload: () => {
        this.timeMax = this.sound.duration();
        if (autoplay) {
          this.sound.play();
        }
      },
      onplay: () => {
        this.timeMax = Math.round(this.sound.duration());
        this.state = 'play';
        this.currentTime = Math.round(this.sound.seek());
        this.changesDetector.detectChanges();
        this.moveSeek();
      },
      onend: () => {
        this.state = 'ended';
        this.changeSong(1);
      }
    });
  }

  getSongImage(index) {
    return this.localPlaylist[index].imageurl;
  }

  getSongName(index) {
    return (this.localPlaylist[index].title + ' - ' + this.localPlaylist[index].channel);
  }

  changeLectureState() {
    if (this.currentSongType() === 'youTube') {
      if (this.player) {
        if (this.player.getPlayerState() === window['YT'].PlayerState.PLAYING) {
          this.player.pauseVideo();
          this.state = 'pause';
        } else {
          this.player.playVideo();
        }
      } else {
        this.initYoutubeVideo(this.localPlaylist[this.cursor]);
      }
    } else {
      if (this.sound) {
        if (!this.sound.playing()) {
          this.sound.play();
          this.state = 'play';
        } else {
          this.sound.pause();
          this.state = 'pause';
        }
      } else {
        this.initFreesoundAudio(this.localPlaylist[this.cursor], true);
      }
    }
  }

  moveSeek() {
    const timeInterval = setInterval(() => {
      if (this.state === 'play') {
        if (this.currentSongType() === 'youTube') {
          this.currentTime = Math.round(this.player.getCurrentTime());
        } else {
          this.currentTime = Math.round(this.sound.seek());
        }
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
      if (this.currentSongType() === 'youTube') {
        this.player.seekTo(second, true);
      } else {
        this.sound.seek(second);
      }
      this.changesDetector.detectChanges();
    }
  }

  changeSong(index) {
    this.cursor += index;
    this.cursor = (this.cursor >= this.localPlaylist.length) ? (0) : (this.cursor < 0) ? (this.localPlaylist.length - 1) : (this.cursor);
    this.currentTime = null;
    this.timeMax = null;
    if (this.player) {
      this.player.pauseVideo();
    }
    if (this.sound) {
      this.sound.pause();
    }
    if (this.currentSongType() === 'youTube') {
      if (this.player) {
        this.player.loadVideoById(this.localPlaylist[this.cursor].url);
      } else {
        this.initYoutubeVideo(this.localPlaylist[this.cursor]);
        this.player.playVideo();
      }
    } else {
      this.initFreesoundAudio(this.localPlaylist[this.cursor], true);
    }
  }

  shufflePlaylist() {
    if (this.random) {
      const playlist = [];
      playlist.push(this.localPlaylist[this.cursor]);
      this.localPlaylist.splice(this.cursor, 1);
      for (const i = 0; i < this.localPlaylist.length; i) {
        const index = Math.round(Math.random() * (this.localPlaylist.length - 1));
        playlist.push(this.localPlaylist[index]);
        this.localPlaylist.splice(index, 1);
      }
      this.localPlaylist = playlist;
      this.cursor = 0;
    } else {
      let i = 0;
      while (this.localPlaylist[this.cursor] !== this.playlist[i] && i < this.playlist.length) {
        i++;
      }
      this.cursor = (i < this.playlist.length) ? i : 0;
      this.localPlaylist = this.playlist.slice();
    }
  }

  changeVolume() {
    if (this.player) {
      this.player.setVolume(this.volume);
    }
    if (this.sound) {
      this.sound.volume(this.volume / 100);
    }
  }

  showPlaylist(event) {
    this.playlistMenu.nativeElement.style.display = 'block';
    event.stopPropagation();
    this.playerWrapper.nativeElement.onclick = () => {
      this.playlistMenu.nativeElement.style.display = 'none';
      this.playerWrapper.nativeElement.onclick = null;
    };
  }

  getProgress() {
    if (this.currentTime === 0) {
      return '0%';
    }
    return (this.currentTime / this.timeMax) * 100 + '%';
  }

  displayTime(time) {
    if (time) {
      const second = time % 60 < 10 ? '0' + time % 60 : time % 60;
      return (Math.floor(time / 60) + ':' + second);
    } else {
      return '0:00';
    }
  }
}
