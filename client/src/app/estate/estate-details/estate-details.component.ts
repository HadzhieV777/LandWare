import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Estate } from 'src/app/shared/models/estate.model';
import { EstateService } from 'src/app/shared/services/estate.service';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss'],
})
export class EstateDetailsComponent {
  // estate: Estate | undefined;

  // constructor(
  //   private estateService: EstateService,
  //   private activatedRoute: ActivatedRoute
  // ) {
  //   this.fetchSingleEstate();
  // }

  // fetchSingleEstate(): void {
  //   this.estate = undefined;
  //   const estateId = this.activatedRoute.snapshot.params['id'];
  //   const estateAr = this.estateService.getById(estateId);
  //   console.log(
  //     estateAr.snapshotChanges().pipe(
  //       map((changes) =>
  //         changes.map((e) => ({
  //           ...(e.payload.doc.data() as Estate),
  //           id: e.payload.doc.id,
  //         }))
  //       )
  //     ).subscribe((data) => {
  //       console.log(data);
  //     })
  //   );
  // }
}
