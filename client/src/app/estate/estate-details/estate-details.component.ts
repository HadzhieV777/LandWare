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
  message = '';
  showEditMode = false;
  formSubmitted = false;

  constructor(private estateService: EstateService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.message = '';
    this.currentEstate = { ...this.estate };
  }

  updateEstate(form: NgForm): void {
    const data = {
      id: this.currentEstate.id,
      owner: this.currentEstate.owner,
     ...form.value
    };

    if (this.currentEstate.id) {
      this.estateService
        .update(this.currentEstate.id, data)
        .then(() => (this.message = 'The estate was updated successfully!'))
        .catch((err) => console.log(err));
    }
  }

  deleteEstate(): void {
    if (this.currentEstate.id) {
      this.estateService
        .delete(this.currentEstate.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The estate was deleted successfully!';
        })
        .catch((err) => console.log(err));
    }
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
      // this.editProfileForm.reset();
    }
  }
}
