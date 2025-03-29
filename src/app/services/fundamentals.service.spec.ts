import { TestBed } from '@angular/core/testing';

import { FundamentalsService } from './fundamentals.service';

describe('FundamentalsService', () => {
  let service: FundamentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundamentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
