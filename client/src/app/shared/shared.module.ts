import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent, FooterComponent, HeaderShadowDirective } from '@app/shared';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HeaderComponent, FooterComponent, HeaderShadowDirective],
  exports: [HeaderComponent, FooterComponent, HeaderShadowDirective, FormsModule, CommonModule]
})
export class SharedModule {}
