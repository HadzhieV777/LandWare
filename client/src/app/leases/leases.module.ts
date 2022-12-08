import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { LeasesComponent } from './leases/leases.component';



@NgModule({
  declarations: [
    AddLeaseComponent,
    LeasesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeasesModule { }
