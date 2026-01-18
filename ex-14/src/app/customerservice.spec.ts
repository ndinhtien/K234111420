import { TestBed } from '@angular/core/testing';

import { Customerservice } from './customerservice';

describe('Customerservice', () => {
  let service: Customerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
