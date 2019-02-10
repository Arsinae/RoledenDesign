import { TestBed, inject } from '@angular/core/testing';

import { DarkService } from './dark.service';

describe('DarkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkService]
    });
  });

  it('should be created', inject([DarkService], (service: DarkService) => {
    expect(service).toBeTruthy();
  }));
});
