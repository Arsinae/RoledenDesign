import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public htmlCode = '<span (click)="openModal()">OpenModal</span>\n<rd-modal [width]="40" (closedModal)="closeModal()" #modal>\n' +
    '  <div class="modalContent">\n    <cite (click)="clickOnCitation($event)">' +
    'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.\n' +
    '      I will face my fear. I will permit it to pass over me and through me. And when it has gone past\n' +
    '      I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.\n    </cite>\n' +
    '    <blockquote>Bene Gesserit Litany Against Fear.</blockquote>\n  </div>\n</rd-modal>\n';
  public tsCode = 'export class MyComponent implements OnInit {\n\n  @ViewChild(\'modal\') modal: ModalComponent;\n\n' +
    '  constructor() { }\n\n  ngOnInit() { }\n\n  openModal() {\n    this.modal.openModal();\n  }\n\n' +
    '  closeModal() {\n    console.log(\'Modal Closed\');\n  }\n\n' +
    '  clickOnCitation(event) {\n    event.stopPropagation();\n    console.log(\'Click on Citation\');\n  }\n}\n';

  @ViewChild('modal') modal: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.openModal();
  }

  closeModal() {
    console.log('Modal Closed');
  }

  clickOnCitation(event) {
    event.stopPropagation();
    console.log('Click on Citation');
  }

}
