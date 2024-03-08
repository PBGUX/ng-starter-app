import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { PbdsHeaderShadowModule } from 'pb-design-system/header-shadow';
import { PbdsPageTitleModule } from 'pb-design-system/page-title';

import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PbdsHeaderShadowModule,
    PbdsPageTitleModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule,
    PbdsHeaderShadowModule,
    PbdsPageTitleModule,
  ],
})
export class SharedModule {}
