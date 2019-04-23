import { RDDarkService } from './../dark.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class RDLoaderComponent implements OnInit {

  @Input() width = 120;
  @Input() type = 'circle';
  @Input() color = 'gold';
  @Input() animation = 'linear';

  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(res => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

}
