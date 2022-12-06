import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatesComponent } from './estates.component';

describe('EstatesComponent', () => {
  let component: EstatesComponent;
  let fixture: ComponentFixture<EstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
