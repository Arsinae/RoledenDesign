import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'rd-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Input() text = '';

  @Output() textChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('textEditor') textArea;

  textTmp;
  size = 17;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
    this.textTmp = this.sanitize.bypassSecurityTrustHtml(this.text);
  }

  addTextStyle(style) {
    document.execCommand(style, false, '');
    this.textArea.nativeElement.focus();
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
  }

  changeEnter(event) {
    if (event.keyCode === 13) {
      document.execCommand('insertHTML', false, '</br><br>');
      return false;
    }
  }

  changeFontSize() {
    document.execCommand('fontSize', false, '7');
    const fontElements = this.textArea.nativeElement.getElementsByTagName('font');
    for (let i = 0, len = fontElements.length; i < len; ++i) {
      if (fontElements[i].attributes.getNamedItem('size')) {
        fontElements[i].removeAttribute('size');
        fontElements[i].style.fontSize = this.size + 'px';
      }
    }
    this.textArea.focus();
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
  }

  pushText() {
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
  }

}
