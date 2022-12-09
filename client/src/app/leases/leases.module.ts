import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { LeasesComponent } from './leases/leases.component';
import { LeasesRoutingModule } from './leases-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddLeaseComponent,
    LeasesComponent
  ],
  imports: [
    CommonModule,
    LeasesRoutingModule,
    ReactiveFormsModule
  ]
})
export class LeasesModule { }
