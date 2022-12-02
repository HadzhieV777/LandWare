import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [
    {
      path: 'pricing',
      component: PricingComponent,
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
