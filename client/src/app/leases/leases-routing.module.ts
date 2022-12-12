import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeaseComponent } from './add-lease/add-lease.component';
import { LeasesComponent } from './leases/leases.component';



const routes: Routes = [
    {
      path: '',
      component: LeasesComponent,
    },
    {
      path: 'add',
      component: AddLeaseComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LeasesRoutingModule {}
