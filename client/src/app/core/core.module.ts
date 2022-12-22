import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CoreRoutingModule } from './core-routing.module';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent, PricingComponent, ResourcesComponent, PricingComponent, NotFoundComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class CoreModule {}
