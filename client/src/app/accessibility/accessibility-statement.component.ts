import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-statement',
  template: `
    <pbds-page-title ttl="Accessibility Statement"></pbds-page-title>

    <div class="container mt-7">
      <div class="row">
        <div class="col-md-7">
          <p>
            Pitney Bowes cares about every user&rsquo;s experience. By applying accessibility standards, we are
            continually improving that experience for people with disabilities.
          </p>
          <p>
            We strive to make our products as accessible as possible for people of all levels of ability using the World
            Wide Web Consortium&rsquo;s Web Content Accessibility Guidelines (WCAG). Our goal is to meet Level AA
            standards for our products.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AccessibilityStatementComponent {}
