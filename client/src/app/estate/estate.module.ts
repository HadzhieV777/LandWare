import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatesComponent } from './estates/estates.component';
import { DashboardRoutingModule } from './estate-routing.module';

@NgModule({
  declarations: [EstatesComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class EstateModule {}
