import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
    {
      path: 'services',
      component: ServicesComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
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
  export class UserRoutingModule {}
