import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input() value = 1;
  @Input() label = null;
  @Input() color = 'gold';
  @Input() display = 'both';
  @Input() min = null;
  @Input() max = null;
  @Input() increment = 1;
  @Input() disabled = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  public dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  incrementValue(increment) {
    if (!this.disabled) {
      const newValue = this.value + increment;
      if (this.min != null && newValue < this.min) {
        this.value = this.min;
      } else if (this.max != null && newValue > this.max) {
        this.value = this.max;
      } else {
        this.value = newValue;
      }
      this.valueChange.emit(this.value);
    }
  }

}
