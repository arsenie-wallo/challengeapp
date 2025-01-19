import { TestBed } from '@angular/core/testing';

import { ApiItemDetailsService } from './api-item-details.service';

describe('ApiItemDetailsService', () => {
  let service: ApiItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
