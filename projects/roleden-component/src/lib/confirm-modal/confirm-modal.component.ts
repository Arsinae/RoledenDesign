import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RDDarkService } from './../dark.service';

@Component({
  selector: 'rd-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class RDConfirmModalComponent implements OnInit {

  @Input() width = 50;
  @Input() maxHeight: number = null;
  @Input() acceptText = 'Accept';
  @Input() cancelText = 'Cancel';

  @Output() closedModal: EventEmitter<any> = new EventEmitter();
  @Output() cancelModal: EventEmitter<any> = new EventEmitter();
  @Output() acceptModal: EventEmitter<any> = new EventEmitter();

  private open = false;
  public dark = true;

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

  clickOnModal(event) {
    event.stopPropagation();
  }

  accept(event) {
    event.stopPropagation();
    this.acceptModal.emit(event);
    this.closeModal();
  }

  cancel(event) {
    event.stopPropagation();
    this.cancelModal.emit(event);
    this.closeModal();
  }

  isOpen() {
    return this.open;
  }

}
