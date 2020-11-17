import { TestBed } from '@angular/core/testing';

import { CarClientService } from './car-client.service';

describe('CarClientService', () => {
  let service: CarClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
