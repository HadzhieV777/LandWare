import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  showEditMode = false;
  formSubmitted = false;

  editProfileForm = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    imageURL: [''],
  });
  constructor(public authService: AuthService,
    private fb: FormBuilder) {}


  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
      this.editProfileForm.reset();
    }
  }
}
