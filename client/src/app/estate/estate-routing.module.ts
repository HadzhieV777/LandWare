import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EstatesComponent } from './estates/estates.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
    {
      path: '',
      component: EstatesComponent,
    },
    {
      path: 'maintenance',
      component: MaintenanceComponent,
    },
    {
      path: 'add',
      component: CreateComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
