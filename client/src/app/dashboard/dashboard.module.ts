import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LeasesComponent } from './leases/leases.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { AddLeaseComponent } from './add-lease/add-lease.component';

@NgModule({
  declarations: [UserPanelComponent, UserDashboardComponent, LeasesComponent, ExpensesComponent, ResourcesComponent, AddExpenceComponent, AddLeaseComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [UserDashboardComponent],
})
export class DashboardModule {}
