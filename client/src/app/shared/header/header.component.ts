import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.site-header') true;
  public searchActive: boolean;

  constructor() {
    this.searchActive = false;
  }

  ngOnInit() {}

  toggleSearch = function() {
    if (this.searchActive) {
      this.searchActive = false;
    } else {
      this.searchActive = true;
    }
  };
}
