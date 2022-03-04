import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AccessibilityRoutingModule } from './accessibility-routing.module';
import { AccessibilityStatementComponent } from './accessibility-statement.component';

@NgModule({
  declarations: [AccessibilityStatementComponent],
  imports: [CommonModule, AccessibilityRoutingModule, SharedModule],
})
export class AccessibilityModule {}
