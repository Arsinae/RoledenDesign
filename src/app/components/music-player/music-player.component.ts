import { Component, OnInit } from '@angular/core';
import { RDMusicElement } from 'projects/roleden-component/src/lib/music-player/music-element.class';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  public playlist: Array<RDMusicElement> = [
    {title: 'Fight Back', imageurl: 'https://i.ytimg.com/vi/CYDP_8UTAus/default.jpg',
      channel: 'Neffex', url: '6vfP_4u7zik', type: 'youTube'},
    {title: 'Numb', imageurl: 'https://i.ytimg.com/vi/lJkEF0_QigU/default.jpg',
      channel: 'Neffex', url: 'lJkEF0_QigU', type: 'youTube'},
    {title: 'Piano Melody', imageurl: 'https://freesound.org/data/displays/186/186942_2594536_wave_M.png',
      channel: 'Lemoncreme', url: 'https://freesound.org/data/previews/186/186942_2594536-hq.mp3', type: 'freeSounds'},
    {title: 'Piano Loop 1', imageurl: 'https://freesound.org/data/displays/440/440931_9015615_wave_M.png',
      channel: 'XHALE303', url: 'https://freesound.org/data/previews/440/440931_9015615-hq.mp3', type: 'freeSounds'},
    {title: 'Destiny', imageurl: 'https://i.ytimg.com/vi/24C8r8JupYY/default.jpg',
      channel: 'Neffex', url: '24C8r8JupYY', type: 'youTube'}
  ];

  public htmlCode = '<rd-music-player [playlist]="playlist" [color]="\'red\'"></rd-music-player>';
  public tsCode = 'public playlist: Array<RDMusicElement> = [\n' +
    '  {title: \'Fight Back\', imageurl: \'https://i.ytimg.com/vi/CYDP_8UTAus/default.jpg\',' +
    ' channel: \'Neffex\', url: \'6vfP_4u7zik\', type: \'youTube\'},\n' +
    '  {title: \'Numb\', imageurl: \'https://i.ytimg.com/vi/lJkEF0_QigU/default.jpg\',' +
    ' channel: \'Neffex\', url: \'lJkEF0_QigU\', type: \'youTube\'},\n' +
    '  {title: \'Piano Melody\', imageurl: \'https://freesound.org/data/displays/186/186942_2594536_wave_M.png\',' +
    ' channel: \'Lemoncreme\', url: \'https://freesound.org/data/previews/186/186942_2594536-hq.mp3\', type: \'freeSounds\'}\n' +
    '];\n';

  constructor() { }

  ngOnInit() {
  }

}
