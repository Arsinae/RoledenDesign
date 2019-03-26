import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit, OnChanges } from '@angular/core';
import { RDSelectOptionComponent } from './select-option/select-option.component';
import { RDDarkService } from '../dark.service';

@Component({
  selector: 'rd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class RDSelectComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() color = 'gold';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(RDSelectOptionComponent) options: QueryList<RDSelectOptionComponent>;

  public open = false;
  public text = '';
  public dark = false;

  constructor(private darkService: RDDarkService) { }

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
