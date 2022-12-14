import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatesComponent } from './estates/estates.component';
import { DashboardRoutingModule } from './estate-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstateDetailsComponent } from './estate-details/estate-details.component';

@NgModule({
  declarations: [EstatesComponent, MaintenanceComponent, CreateComponent, EstateDetailsComponent],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule, FormsModule],
})
export class EstateModule {}
