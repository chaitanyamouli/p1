import { TestBed } from '@angular/core/testing';

import { TourserviceService } from './tourservice.service';

describe('TourserviceService', () => {
  let service: TourserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
