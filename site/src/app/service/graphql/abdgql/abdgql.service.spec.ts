import { TestBed } from '@angular/core/testing';

import { AbdgqlService } from './abdgql.service';

describe('AbdgqlService', () => {
  let service: AbdgqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbdgqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
