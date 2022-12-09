import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserPanelComponent,
    UserDashboardComponent,
    ExpensesComponent,
    ResourcesComponent,
    AddExpenceComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule],
  exports: [UserDashboardComponent],
})
export class DashboardModule {}
