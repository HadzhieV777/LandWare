import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatesComponent } from './estates/estates.component';
import { DashboardRoutingModule } from './estate-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [EstatesComponent, MaintenanceComponent, CreateComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class EstateModule {}
