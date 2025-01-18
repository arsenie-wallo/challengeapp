import { TestBed } from '@angular/core/testing';

import { EmployeApiService } from '../employee-api.service';

describe('EmployeApiService', () => {
  let service: EmployeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
