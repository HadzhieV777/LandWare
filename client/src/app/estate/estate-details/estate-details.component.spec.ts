import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDetailsComponent } from './estate-details.component';

describe('EstateDetailsComponent', () => {
  let component: EstateDetailsComponent;
  let fixture: ComponentFixture<EstateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
