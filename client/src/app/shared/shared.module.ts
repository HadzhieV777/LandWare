import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AuthenticateComponent
  ],
  imports: [CommonModule],
  exports: [AuthenticateComponent],
})
export class SharedModule {}
