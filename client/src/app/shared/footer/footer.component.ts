import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  @HostBinding('class.site-footer') true;
  private startYear = 2018;
  public date: string;

  ngOnInit(): void {
    const currentYear: number = new Date().getFullYear();
    this.date = this.startYear === currentYear ? `${currentYear}` : `${this.startYear}-${currentYear}`;
  }
}
