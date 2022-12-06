import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { FormsComponent } from './forms/forms.component';
import { LeasesComponent } from './leases/leases.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
    {
      path: '',
      component: UserPanelComponent,
    },
    {
      path: 'forms',
      component: FormsComponent,
    },
    {
      path: 'leases',
      component: LeasesComponent,
    },
    {
      path: 'expenses',
      component: ExpensesComponent,
    },
    {
      path: 'leases',
      component: LeasesComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
