import { Component, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('navMenu') nav;

  public dark = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.addEventListener('scroll', () => {
      this.setMenuPosition();
    });
    this.setMenuPosition();
  }

  setMenuPosition() {
    this.nav.nativeElement.style.transform = 'translateY(' + window.pageYOffset + 'px)';
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
