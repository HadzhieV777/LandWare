import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatesComponent } from './estates/estates.component';

const routes: Routes = [
    {
      path: '',
      component: EstatesComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
