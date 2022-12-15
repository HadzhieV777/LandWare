import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Estate } from 'src/app/shared/models/estate.model';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { EstateService } from 'src/app/shared/services/estate.service';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
})
export class EstatesComponent implements OnInit {
  arrayEstate?: Estate[];

  currentEstate?: Estate;
  currentIndex = -1;

  userId = this.authService.user.uid;

  constructor(
    private estateService: EstateService,
    private authService: AuthService
  ) {
    this.retrieveEstates()
  }

  ngOnInit(): void {
  }

  refreshList(): void {
    this.currentEstate = undefined;
    this.currentIndex = -1;
    this.retrieveEstates();
  }

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

  setActiveEstate(estate: Estate, index: number): void {
    this.currentEstate = estate;
    this.currentIndex = index;
  }

}
