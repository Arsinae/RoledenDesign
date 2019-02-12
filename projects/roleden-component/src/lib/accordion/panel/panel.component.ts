import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DarkService } from '../../dark.service';

@Component({
  selector: 'rd-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() color = 'black';

  @Output() stateChange = new EventEmitter<any>();

  @ViewChild('textContainer') textContainer;
  @ViewChild('textContent') textContent;

  open = false;
  public dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
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
