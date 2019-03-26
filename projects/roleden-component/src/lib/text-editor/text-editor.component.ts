import {Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { RDDarkService } from './../dark.service';

@Component({
  selector: 'rd-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class RDTextEditorComponent implements OnInit, OnChanges {

  @Input() text = '';
  @Input() height = 200;

  @Output() textChange: EventEmitter<any> = new EventEmitter();
  @Output() getSelection: EventEmitter<any> = new EventEmitter();

  @ViewChild('textEditor') textArea;

  public textTmp;
  public size = 17;
  public dark = false;

  constructor(private sanitize: DomSanitizer, public darkService: RDDarkService) { }

  ngOnInit() {
    this.textTmp = this.sanitize.bypassSecurityTrustHtml(this.text);
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  ngOnChanges() {
    this.textTmp = this.sanitize.bypassSecurityTrustHtml(this.text);
  }

  addTextStyle(style) {
    document.execCommand(style, false, '');
    this.textArea.nativeElement.focus();
    this.textChange.emit(this.textArea.nativeElement.innerHTML);
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

  handleClick(event) {
    if (event.view.getSelection().type === 'Range')   {
      this.getSelection.emit(event.view.getSelection().toString());
    }
  }

}
