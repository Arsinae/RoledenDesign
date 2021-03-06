import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { RDDarkService } from './../dark.service';

@Component({
  selector: 'rd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class RDInputComponent implements OnInit, OnChanges {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() color = 'gold';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() pressEnter = new EventEmitter<any>();

  @ViewChild('input') input;

  public focus = false;
  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.focus = (this.value === '' || this.value === null) ? false : true;
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  ngOnChanges(changes) {
    this.focus = (this.value === '' || this.value === null) ? false : true;
  }

  changeFocus() {
    this.input.nativeElement.focus();
  }

  changeValue(event) {
    this.value = event;
    this.valueChange.emit(event);
  }

  pressKey(event) {
    if (event.keyCode === 13) {
      this.pressEnter.emit();
    }
  }

  focusInput() {
    this.focus = true;
  }

  unfocusInput() {
    if (this.value === '' || this.value === null) {
      this.focus = false;
    }
  }

}
