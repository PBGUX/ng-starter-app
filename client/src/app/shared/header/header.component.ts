import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.site-header')
  true;

  @ViewChild('searchLink')
  searchLink: ElementRef;

  @ViewChild('searchInput')
  searchInput: ElementRef;

  public searchActive: boolean;

  constructor() {
    this.searchActive = false;
  }

  ngOnInit() {
  }

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
