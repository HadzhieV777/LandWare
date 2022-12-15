import { Component } from '@angular/core';
import { Estate } from 'src/app/shared/models/estate.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { EstateService } from 'src/app/shared/services/estate.service';
import { map } from 'rxjs';
import { Expence } from 'src/app/shared/models/expence.model';

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
    public estateService: EstateService
  ) {
    this.retrieveEstates();
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
        this.arrayEstate = data
      });
  }

  get reduceRents() {
    if (this.arrayEstate) {
     return this.arrayEstate.reduce((acc, val) => acc += val.price? val.price: 0, 0);
    }
    return 0
  }



}
