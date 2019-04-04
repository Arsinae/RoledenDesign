import { Component, OnInit, OnChanges, Input, Output,
  EventEmitter, ViewChild } from '@angular/core';
import { RDDarkService } from './../dark.service';

@Component({
  selector: 'rd-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class RDInputAutocompleteComponent implements OnInit, OnChanges {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() color = 'gold';
  @Input() disabled = false;
  @Input() completeValues: Array<string> = [];
  @Input() noMatchingText = 'No matching value';

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
    setTimeout(() => {
      this.focus = false;
    }, 200);
  }

  getMatchingValues() {
    const matching = [];
    for (const value of this.completeValues) {
      if (value.match(this.value)) {
        matching.push(value);
      }
    }
    return matching;
  }

  clickValue(value) {
    this.value = value;
    this.valueChange.emit(value);
    this.focus = false;
  }
}
