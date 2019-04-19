import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class RDLoaderComponent implements OnInit {

  @Input() width = 120;
  @Input() height = 120;
  @Input() type = 'circle';
  @Input() color = 'gold';
  @Input() animation = 'linear';

  constructor() { }

  ngOnInit() {
  }

}
