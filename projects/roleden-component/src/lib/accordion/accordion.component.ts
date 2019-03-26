import { Component, OnInit, ContentChildren, AfterViewInit, QueryList, Input } from '@angular/core';
import { RDPanelComponent } from './panel/panel.component';

@Component({
  selector: 'rd-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class RDAccordionComponent implements OnInit, AfterViewInit {

  @Input() autoClose = true;

  @ContentChildren(RDPanelComponent) panels: QueryList<RDPanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.panels.forEach(panel => {
      panel.stateChange.subscribe((event) => {
        if (event === true) {
          this.closePanel(panel);
        }
      });
    });
  }

  closePanel(current) {
    if (this.autoClose) {
      this.panels.forEach(panel => {
        if (panel !== current) {
          Promise.resolve(null).then(() => {
            panel.open = false;
            panel.changeTextContainerSize();
          });
        }
      });
    }
  }

}
