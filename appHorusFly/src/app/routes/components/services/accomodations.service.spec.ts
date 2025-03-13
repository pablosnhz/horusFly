import { TestBed } from '@angular/core/testing';

import { AccomodationsService } from './accomodations.service';

describe('AccomodationsService', () => {
  let service: AccomodationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomodationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
