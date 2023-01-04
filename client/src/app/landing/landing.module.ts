import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageComponent, HeroSectionComponent, ServicesSectionComponent, BenefitsSectionComponent, FaqSectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageComponent],
})
export class LandingModule {}
