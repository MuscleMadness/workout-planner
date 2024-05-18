import { TestBed } from '@angular/core/testing';

import { ExcercisesService } from './excercises.service';

describe('ExcercisesService', () => {
  let service: ExcercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
