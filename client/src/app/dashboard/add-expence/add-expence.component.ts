import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.scss'],
})
export class AddExpenceComponent  {
  addExpenceForm = this.fb.group({
    expenceTitle: ['', [Validators.required, Validators.minLength(5)]],
    expenceCost: ['', [Validators.required]],
    propAddress: ['', [Validators.required, Validators.minLength(10)]],
    expenceDesc: ['', [Validators.required], Validators.minLength(5)],
  });
  constructor(private fb: FormBuilder) {}


}
