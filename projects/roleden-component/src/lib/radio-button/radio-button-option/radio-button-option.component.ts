import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RDDarkService } from '../../dark.service';

@Component({
  selector: 'rd-radio-button-option',
  templateUrl: './radio-button-option.component.html',
  styleUrls: ['./radio-button-option.component.scss']
})
export class RDRadioButtonOptionComponent implements OnInit {

  @Input() value = '';

  @Output() checkedChange: EventEmitter<any> = new EventEmitter();

  public checked = false;
  public color = 'gold';
  public display = 'line';
  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  changeCheck() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
