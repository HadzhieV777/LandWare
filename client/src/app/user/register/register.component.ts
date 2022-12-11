import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { CustomvalidationService } from 'src/app/shared/validators/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
      ],
      rePassword: ['', [Validators.required]],
    },
    {
      validator: this.customValidator.MatchPassword('password', 'rePassword'),
    }
  );
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    public authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;
    this.authService.Register(email, password);
    this.router.navigate(['/dashboard']);
  }
}
function matchPasswordsValidator(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}
