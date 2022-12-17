import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstateService } from 'src/app/shared/services/estate.service';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { fadeIn } from 'src/app/shared/animations/fade-animations';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
animations: [fadeIn]
})
export class CreateComponent implements OnInit {
  public createPropForm;

  constructor(
    private fb: FormBuilder,
    private estateService: EstateService,
    private authService: AuthService,
    private router: Router
  ) {
    this.createPropForm = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      zip: ['', [Validators.required, Validators.minLength(2)]],
      bedrooms: ['', [Validators.required]],
      baths: ['', [Validators.required]],
      type: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  addEstate() {
    const estate = {
      owner: this.authService.user.uid,
      ...this.createPropForm.value,
      rented: true,
      maintenance: false,
    };

    this.estateService.create(estate as any);
    this.router.navigate(['/properties/']);
  }
}
