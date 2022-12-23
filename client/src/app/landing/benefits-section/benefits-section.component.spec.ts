import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsSectionComponent } from './benefits-section.component';

describe('BenefitsSectionComponent', () => {
  let component: BenefitsSectionComponent;
  let fixture: ComponentFixture<BenefitsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
