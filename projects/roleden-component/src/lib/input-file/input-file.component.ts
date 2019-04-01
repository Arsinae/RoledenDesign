import { RDDarkService } from './../dark.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class RDInputFileComponent implements OnInit {

  @Input() label = 'Choose a file';
  @Input() accept = '';
  @Input() multiple = false;

  public files: FileList = null;
  public dark = false;

  @Output() fileChange: EventEmitter<any> = new EventEmitter();

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  changeValue(ev) {
    if (ev.target.files && ev.target.files.length > 0) {
      this.files = ev.target.files;
      this.fileChange.emit(this.files);
    }
  }

  removeFile() {
    this.files = null;
    this.fileChange.emit(this.files);
  }
}
