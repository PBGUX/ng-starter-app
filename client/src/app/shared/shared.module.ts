import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent, HeaderShadowDirective } from '@app/shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, HeaderShadowDirective],
  exports: [HeaderComponent, FooterComponent, HeaderShadowDirective]
})
export class SharedModule { }
