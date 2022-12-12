import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Estate } from 'src/app/shared/models/estate.model';
import { EstateService } from 'src/app/shared/services/estate.service';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
})
export class EstatesComponent implements OnInit {
  arrayEstate?: Estate[];

  constructor(private estateService: EstateService) {}

  ngOnInit(): void {
    this.retrieveEstates();
  }

  retrieveEstates(): void {
    this.estateService
      .getAll()
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
}
