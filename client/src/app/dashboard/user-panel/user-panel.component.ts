import { Component } from '@angular/core';
import { Estate } from 'src/app/shared/models/estate.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { EstateService } from 'src/app/shared/services/estate.service';
import { map } from 'rxjs';
import { Expence } from 'src/app/shared/models/expence.model';
import { ExpencesService } from 'src/app/shared/services/expences.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent {
  arrayEstate?: Estate[];
  arrayExpenses?: Expence[];

  constructor(
    public authService: AuthService,
    public estateService: EstateService,
    public expensesService: ExpencesService
  ) {
    this.retrieveEstates();
    this.retrieveExpenses();
  }

  userId = this.authService.user.uid;

  retrieveEstates(): void {
    this.estateService
      .getByUser(this.userId)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((e) => ({
            ...(e.payload.doc.data() as Estate),
            id: e.payload.doc.id,
          }))
        )
      )
      .subscribe((data) => {
        this.arrayEstate = data;
      });
  }

  get reduceRents() {
    if (this.arrayEstate) {
      return this.arrayEstate.reduce(
        (acc, val) => (acc += val.price ? val.price : 0),
        0
      );
    }
    return 0;
  }

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

  get reduceExpenses() {
    if (this.arrayExpenses) {
      return this.arrayExpenses.reduce(
        (acc, val) => (acc += val.cost ? val.cost : 0),
        0
      );
    }
    return 0;
  }
}
