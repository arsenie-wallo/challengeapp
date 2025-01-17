import { TestBed } from '@angular/core/testing';

import { DetailRetrieverService } from './detail-retriever.service';

describe('DetailRetrieverService', () => {
  let service: DetailRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
