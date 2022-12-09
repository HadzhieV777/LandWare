import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ResourcesComponent } from './resources/resources.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
    {
      path: '',
      component: UserPanelComponent,
    },
    {
      path: 'expenses',
      component: ExpensesComponent,
    },
    {
      path: 'add/expence',
      component: AddExpenceComponent,
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
