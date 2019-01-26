import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() width = 50;
  @Input() maxHeight: number = null;

  @Output() closedModal: EventEmitter<any> = new EventEmitter();

  private open = false;

  constructor() { }

  ngOnInit() {
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
