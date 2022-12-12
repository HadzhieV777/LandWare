import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenceComponent } from './add-expence/add-expence.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
    {
      path: '',
      component: ExpensesComponent,
    },
    {
      path: 'add',
      component: AddExpenceComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ExpensesRoutingModule {}
