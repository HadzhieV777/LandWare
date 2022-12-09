import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.scss'],
})
export class AddLeaseComponent {
  addLeaseForm = this.fb.group({
    leaseTitle: ['', [Validators.required, Validators.minLength(5)]],
    propAddress: ['', [Validators.required, Validators.minLength(10)]],
    rent: ['', [Validators.required]],
    leaseDesc: ['', [Validators.required], Validators.minLength(5)],
    dateFrom: [''],
    dateTo: [''],
  });
  constructor(private fb: FormBuilder) {}
}
