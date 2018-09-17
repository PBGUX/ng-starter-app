import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule, HomeComponent } from '@app/home';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: []
})
export class HomeModule { }
