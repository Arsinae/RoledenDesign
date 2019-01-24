import { Component, OnInit, ContentChildren, AfterViewInit, QueryList, Input } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'rd-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterViewInit {

  @Input() autoClose = true;

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

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
