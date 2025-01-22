import { TestBed } from '@angular/core/testing';

import { DetailApiService } from './api-object-handler.service';

describe('ApiItemDetailsService', () => {
  let service: DetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
