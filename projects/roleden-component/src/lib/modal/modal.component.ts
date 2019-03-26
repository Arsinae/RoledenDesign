import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RDDarkService } from './../dark.service';

@Component({
  selector: 'rd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class RDModalComponent implements OnInit {

  @Input() width = 50;
  @Input() maxHeight: number = null;

  @Output() closedModal: EventEmitter<any> = new EventEmitter();

  private open = false;
  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
    this.closedModal.emit();
  }

  isOpen() {
    return this.open;
  }

}
