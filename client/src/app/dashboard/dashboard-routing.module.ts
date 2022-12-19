import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
    {
      path: '',
      component: UserPanelComponent,
      
    },
    {
      path: 'resources',
      component: ResourcesComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
