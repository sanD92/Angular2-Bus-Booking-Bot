import { TestBed, inject } from '@angular/core/testing';

import { SttService } from './stt.service';

describe('SttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SttService]
    });
  });

  it('should be created', inject([SttService], (service: SttService) => {
    expect(service).toBeTruthy();
  }));
});
