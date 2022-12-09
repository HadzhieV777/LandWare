import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createPropForm = this.fb.group({
    propAddress: ['', [Validators.required, Validators.minLength(10)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    zip: ['', [Validators.required, Validators.minLength(2)]],
    bedrooms: ['', [Validators.required]],
    baths: ['', [Validators.required]],
    type: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
