import { TestBed } from '@angular/core/testing';

import { AbdstService } from './abdst.service';

describe('AbdstService', () => {
  let service: AbdstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbdstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
