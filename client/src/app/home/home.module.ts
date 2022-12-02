import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { UserRoutingModule } from './home-routing.module';
import { PricingComponent } from './pages/pricing/pricing.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent, PricingComponent, AboutComponent, ResourcesComponent, PricingComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class HomeModule {}
