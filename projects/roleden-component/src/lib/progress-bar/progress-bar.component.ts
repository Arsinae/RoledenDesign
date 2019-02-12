import { Component, OnInit, Input } from '@angular/core';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() width = 50;
  @Input() height = 15;
  @Input() color = 'gold';
  @Input() display = false;

  public dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

}
