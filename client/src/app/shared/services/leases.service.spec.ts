import { TestBed } from '@angular/core/testing';

import { LeasesService } from './leases.service';

describe('LeasesService', () => {
  let service: LeasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
