import { TestBed } from '@angular/core/testing';

import { DepartmentDeleteService } from './department-delete.service';

describe('DepartmentDeleteService', () => {
  let service: DepartmentDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
