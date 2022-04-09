import { TestBed } from '@angular/core/testing';

import { GetrequiestService } from './getrequiest.service';

describe('GetrequiestService', () => {
  let service: GetrequiestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrequiestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
