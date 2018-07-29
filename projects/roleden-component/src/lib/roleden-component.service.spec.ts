import { TestBed, inject } from '@angular/core/testing';

import { RoledenComponentService } from './roleden-component.service';

describe('RoledenComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoledenComponentService]
    });
  });

  it('should be created', inject([RoledenComponentService], (service: RoledenComponentService) => {
    expect(service).toBeTruthy();
  }));
});
