import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';
import { PbdsHeaderShadowModule } from 'pb-design-system';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, PbdsHeaderShadowModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, PbdsHeaderShadowModule]
})
export class SharedModule {}
