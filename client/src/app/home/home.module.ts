import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { UserRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent, ServicesComponent, AboutComponent, ResourcesComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class HomeModule {}
