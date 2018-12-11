import { Component, OnInit, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'rd-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output() stateChange = new EventEmitter<any>();

  @ViewChild('textContainer') textContainer;
  @ViewChild('textContent') textContent;

  open = false;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.open = !this.open;
    this.stateChange.emit(this.open);
    this.changeTextContainerSize();
  }

  changeTextContainerSize() {
    if (this.open) {
      this.textContainer.nativeElement.style.height = this.textContent.nativeElement.clientHeight + 'px';
    } else {
      this.textContainer.nativeElement.style.height = '0px';
    }
  }

}
