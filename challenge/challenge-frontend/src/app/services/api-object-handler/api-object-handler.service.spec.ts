import { TestBed } from '@angular/core/testing';

import { ApiItemDetailsService } from './api-object-handler.service';

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
