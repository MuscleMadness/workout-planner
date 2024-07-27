import { TestBed } from '@angular/core/testing';

import { MuscleGroupServiceService } from './muscle-group-service.service';

describe('MuscleGroupServiceService', () => {
  let service: MuscleGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuscleGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
