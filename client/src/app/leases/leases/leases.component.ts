import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Lease } from 'src/app/shared/models/lease.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { LeasesService } from 'src/app/shared/services/leases.service';

@Component({
  selector: 'app-leases',
  templateUrl: './leases.component.html',
  styleUrls: ['./leases.component.scss'],
})
export class LeasesComponent implements OnInit {
  arrayLeases?: Lease[];

  constructor(
    private authService: AuthService,
    private leaseService: LeasesService
  ) {}

  ngOnInit(): void {
    this.retrieveExpenses();
  }

  userId = this.authService.user.uid;

  retrieveExpenses(): void {
    this.leaseService
      .getByUser(this.userId)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((e) => ({
            ...(e.payload.doc.data() as Lease),
            id: e.payload.doc.id,
          }))
        )
      )
      .subscribe((data) => {
        this.arrayLeases = data;
      });
  }
}
