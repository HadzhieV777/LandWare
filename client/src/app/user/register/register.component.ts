import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
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
      fName: ['', [Validators.required, Validators.minLength(2)]],
      lName: ['', [Validators.required, Validators.minLength(2)]],
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
      validator: this.customValidator.MatchPassword(
        'password',
        'rePassword'
      ),
    }
  );
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) {}
}
function matchPasswordsValidator(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}
