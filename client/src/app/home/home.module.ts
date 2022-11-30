import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class HomeModule {}
