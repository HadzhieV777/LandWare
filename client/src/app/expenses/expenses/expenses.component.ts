import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Expence } from 'src/app/shared/models/expence.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { ExpencesService } from 'src/app/shared/services/expences.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  arrayExpenses?: Expence[];

  constructor(
    private authService: AuthService,
    private expensesService: ExpencesService
  ) {}

  ngOnInit(): void {
    this.retrieveExpenses();
  }

  userId = this.authService.user.uid;

  retrieveExpenses(): void {
    this.expensesService
      .getByUser(this.userId)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((e) => ({
            ...(e.payload.doc.data() as Expence),
            id: e.payload.doc.id,
          }))
        )
      )
      .subscribe((data) => {
        this.arrayExpenses = data;
      });
  }

  deleteExpense(expenseId: string | undefined): void {
    if (expenseId) {
      this.expensesService.delete(expenseId).then(() => {
        this.expensesService.getByUser(this.userId)
      })
      .catch(err => console.log(err))
    }

  }
}
