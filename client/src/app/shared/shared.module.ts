import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent } from '@app/shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
