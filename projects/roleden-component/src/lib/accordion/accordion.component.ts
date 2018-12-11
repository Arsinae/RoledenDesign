import { Component, OnInit, ContentChildren, AfterViewInit, QueryList } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'rd-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterViewInit {

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
    this.panels.forEach(panel => {
      if (panel !== current) {
        panel.open = false;
        panel.changeTextContainerSize();
      }
    });
  }

}
