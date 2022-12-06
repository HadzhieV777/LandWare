import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { LeasesComponent } from './leases/leases.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [UserPanelComponent, UserDashboardComponent, FormsComponent, LeasesComponent, ExpensesComponent, StatisticsComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [UserDashboardComponent],
})
export class DashboardModule {}
