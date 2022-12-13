import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { LeasesService } from 'src/app/shared/services/leases.service';

@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.scss'],
})
export class AddLeaseComponent {
  public addLeaseForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private leasesService: LeasesService
  ) {
    this.addLeaseForm = this.fb.group({
      startDate: [''].toString(),
      endDate: [''].toString(),
      title: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      rent: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  addLease() {
  const lease = {
    owner: this.authService.user.uid,
    ...this.addLeaseForm.value,
  };

  this.leasesService.create(lease as any);
  this.router.navigate(['/leases']);
}
}
