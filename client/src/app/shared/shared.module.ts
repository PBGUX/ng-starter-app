import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';
import { PbdsHeaderShadowModule, PbdsPageTitleModule } from 'pb-design-system';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, PbdsHeaderShadowModule, PbdsPageTitleModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PbdsHeaderShadowModule,
    PbdsPageTitleModule
  ]
})
export class SharedModule {}
