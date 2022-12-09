import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  showEditMode = false;
  formSubmitted = false;

  editProfileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fName: ['', [Validators.required, Validators.minLength(2)]],
    lName: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
      this.editProfileForm.reset();
    }
  }
}
