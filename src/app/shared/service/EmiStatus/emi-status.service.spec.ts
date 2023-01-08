import { TestBed } from '@angular/core/testing';

import { EmiStatusService } from './emi-status.service';

describe('EmiStatusService', () => {
  let service: EmiStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmiStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
