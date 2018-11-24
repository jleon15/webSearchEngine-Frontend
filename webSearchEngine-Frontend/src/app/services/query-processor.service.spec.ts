import { TestBed, inject } from '@angular/core/testing';

import { QueryProcessorService } from './query-processor.service';

describe('QueryProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryProcessorService]
    });
  });

  it('should be created', inject([QueryProcessorService], (service: QueryProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
