import { Component, OnInit, Input } from '@angular/core';
import { RDDarkService } from '../dark.service';

@Component({
  selector: 'rd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class RDProgressBarComponent implements OnInit {

  @Input() width = 50;
  @Input() height = 15;
  @Input() color = 'gold';
  @Input() display = false;

  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

}
