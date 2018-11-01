import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent, HeaderShadowDirective } from '@app/shared';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, HeaderShadowDirective],
  exports: [HeaderComponent, FooterComponent, HeaderShadowDirective]
})
export class SharedModule {}
