import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.site-header') true;

  @ViewChild('searchLink')
  searchLink: ElementRef<HTMLButtonElement>;

  @ViewChild('searchInput')
  searchInput: ElementRef<HTMLInputElement>;

  public searchActive: boolean;

  isMenuCollapsed = true;

  constructor() {
    this.searchActive = false;
  }

  ngOnInit() {}

  toggleSearch = function ($event: Event) {
    $event.preventDefault();

    if (this.searchActive) {
      this.searchActive = false;

      setTimeout(() => {
        this.searchLink.nativeElement.focus();
      }, 0);
    } else {
      this.searchActive = true;

      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      }, 0);
    }
  };
}
