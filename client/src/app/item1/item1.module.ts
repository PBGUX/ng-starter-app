import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { Item1RoutingModule } from './item1-routing.module';
import { Item1Component } from './item1.component';

@NgModule({
  declarations: [Item1Component],
  imports: [Item1RoutingModule, SharedModule],
})
export class Item1Module {}
