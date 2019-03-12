import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent, HeaderShadowDirective } from '@app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, HeaderShadowDirective],
  exports: [HeaderComponent, FooterComponent, HeaderShadowDirective, FormsModule, CommonModule]
})
export class SharedModule {}
