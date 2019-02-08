import { Component, OnInit, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public dark = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  changeDarkMode() {
    this.dark = !this.dark;
    if (this.dark) {
      this.renderer.addClass(document.body, 'rdDark');
    } else {
      this.renderer.removeClass(document.body, 'rdDark');
    }
  }

}
