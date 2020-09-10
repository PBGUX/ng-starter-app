import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <div class="page-header">
      <div class="container-fluid page-title">
        <div class="row">
          <div class="col">
            <h1 [ngClass]="{ 'mb-0': sub }">{{ ttl }}</h1>
            <h2>{{ sub }}</h2>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .page-title {
        h1.mb-0 + h2 {
          font-size: 16px;
          margin-bottom: 2rem;
        }
      }
    `
  ]
})
export class PageTitleComponent {
  @Input()
  ttl: string;
  @Input()
  sub?: string;
}
