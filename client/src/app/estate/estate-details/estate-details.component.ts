import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estate } from 'src/app/shared/models/estate.model';
import { EstateService } from 'src/app/shared/services/estate.service';

@Component({
  selector: 'app-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss'],
  // animations: [bounceIn],
})
export class EstateDetailsComponent implements OnInit {
  @Input() estate?: Estate;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  @ViewChild(NgForm, { static: true }) form!: ElementRef<HTMLInputElement>;

  currentEstate: Estate = {
    address: '',
    city: '',
    zip: '',
    bedrooms: 0,
    baths: 0,
    type: '',
    price: 0,
    rented: true,
    maintenance: false,
  };

  showEditMode = false;
  formSubmitted = false;

  constructor(private estateService: EstateService) {}

  isRentChecked = this.currentEstate.rented;
  isMaintenanceChecked = this.currentEstate.maintenance;

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.currentEstate = { ...this.estate };
  }

  updateEstate(form: NgForm): void {
    const data = {
      id: this.currentEstate.id,
      owner: this.currentEstate.owner,
      ...form.value,
    };

    if (this.currentEstate.id) {
      this.estateService
        .update(this.currentEstate.id, data)
        .then(() => this.toggleEditMode())
        .catch((err) => console.log(err));
    }
  }

  deleteEstate(): void {
    if (this.currentEstate.id) {
      this.estateService
        .delete(this.currentEstate.id)
        .then(() => {
          this.unsetEstate();
        })
        .catch((err) => console.log(err));
    }
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  unsetEstate(): void {
    this.refreshList.emit();
  }

  updateRent(status: boolean): void {
    if (this.currentEstate.id) {
      this.estateService
        .update(this.currentEstate.id, { rented: status })
        .then(() => {
          this.currentEstate.rented = status;
          this.isRentChecked = this.currentEstate.rented;
        })
        .catch((err) => console.log(err));
    }
  }

  updateMaintenance(status: boolean): void {
    if (this.currentEstate.id) {
      this.estateService
        .update(this.currentEstate.id, { maintenance: status })
        .then(() => {
          this.currentEstate.maintenance = status;
          this.isMaintenanceChecked = this.currentEstate.maintenance;
        })
        .catch((err) => console.log(err));
    }
  }
}
