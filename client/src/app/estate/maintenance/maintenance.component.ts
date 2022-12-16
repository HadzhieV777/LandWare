import { Component, Input, SimpleChanges } from '@angular/core';
import { map } from 'rxjs';
import { listAnimation } from 'src/app/shared/animations/list-animations';
import { Estate } from 'src/app/shared/models/estate.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { EstateService } from 'src/app/shared/services/estate.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  animations: [listAnimation]
})
export class MaintenanceComponent {
  arrayFiltered?: Estate[];
  userId = this.authService.user.uid;

  constructor(
    private estateService: EstateService,
    private authService: AuthService
  ) {
    this.filterEstate();
  }

  filterEstate(): void {
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
        this.arrayFiltered = data.filter((e) => e.maintenance === true);
      });
  }
}
