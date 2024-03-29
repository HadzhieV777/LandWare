import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { bounceIn } from 'src/app/shared/animations/bounce';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { ExpencesService } from 'src/app/shared/services/expences.service';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.scss'],
  animations: [bounceIn]
})
export class AddExpenceComponent {
  public addExpenceForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private expensesService: ExpencesService
  ) {
    this.addExpenceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      cost: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      date: [''].toString()
    });
  }
  

  addExpense() {
    const expense = {
      owner: this.authService.user.uid,
      ...this.addExpenceForm.value,
    };

    this.expensesService.create(expense as any);
    this.router.navigate(['/expenses']);
  }
}
