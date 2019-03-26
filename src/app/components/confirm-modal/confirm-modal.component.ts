import { Component, OnInit, ViewChild } from '@angular/core';
import { RDConfirmModalComponent } from './../../../../projects/roleden-component/src/lib/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @ViewChild('modal') modal: RDConfirmModalComponent;

  public htmlCode = '<rd-confirm-modal #modal (acceptModal)="acceptModal()" (cancelModal)="cancelModal()" (closedModal)="closeModal()">\n' +
    '  <div class="modalContent">\n    <cite>Don’t fear me. Forget mystery and accept love...</cite>\n' +
    '    <blockquote>Paul Muad\'Dib</blockquote>\n  </div>\n</rd-confirm-modal>\n';
  public tsCode = 'export class MyComponent implements OnInit {\n\n  @ViewChild(\'modal\') modal: RDConfirmModalComponent;\n\n' +
  '  constructor() { }\n\n  ngOnInit() { }\n\n  openModal() {\n    this.modal.openModal();\n  }\n\n' +
  '  closeModal() {\n    console.log(\'Modal Closed\');\n  }\n\n' +
  '  acceptModal() {\n    console.log(\'Modal Accepted\');\n  }\n\n' +
  '  cancelModal() {\n    console.log(\'Modal Canceled\');\n  }\n}\n';

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.openModal();
  }

  acceptModal() {
    console.log('Modal accepted');
  }

  cancelModal() {
    console.log('Modal canceled');
  }

  closeModal() {
    console.log('Modal closed');
  }

}
