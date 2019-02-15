import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit, OnChanges } from '@angular/core';
import { SelectOptionComponent } from './select-option/select-option.component';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() color = 'gold';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(SelectOptionComponent) options: QueryList<SelectOptionComponent>;

  public open = false;
  public text = '';
  public dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  ngAfterViewInit() {
    this.options.forEach(option => {
      option.valueSelected.subscribe((event) => {
        this.value = event;
        this.valueChange.emit(this.value);
        this.text = (option.text !== '') ? option.text : option.value;
        this.open = false;
      });
    });
    this.changeText();
  }

  ngOnChanges(changes) {
    this.changeText();
  }

  changeText() {
    if (this.options && this.value !== '') {
      this.options.forEach(option => {
        if (option.value === this.value) {
          this.text = (option.text !== '') ? option.text : option.value;
        }
      });
    }
  }

}
