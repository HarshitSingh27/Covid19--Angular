import { TestBed } from '@angular/core/testing';

import { Rest1Service } from './rest1.service';

describe('Rest1Service', () => {
  let service: Rest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
