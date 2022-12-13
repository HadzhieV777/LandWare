import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EstateDetailsComponent } from './estate-details/estate-details.component';
import { EstatesComponent } from './estates/estates.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { EstateResolver } from './resolvers/estate.resolver';

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
    {
      path: 'detail/:id',
      resolve: {
        estate: EstateResolver
      },
      component: EstateDetailsComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
