import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [ExpensesComponent, AddExpenceComponent],
  imports: [CommonModule, ReactiveFormsModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
