import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaseComponent } from './add-lease.component';

describe('AddLeaseComponent', () => {
  let component: AddLeaseComponent;
  let fixture: ComponentFixture<AddLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
