import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';
import { PbdsHeaderShadowModule } from 'pb-design-system';
import { PageTitleComponent } from './page-title.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, PbdsHeaderShadowModule],
  declarations: [HeaderComponent, FooterComponent, PageTitleComponent],
  exports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, PbdsHeaderShadowModule, PageTitleComponent]
})
export class SharedModule {}
