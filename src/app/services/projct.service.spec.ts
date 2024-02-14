import { TestBed } from '@angular/core/testing';

import { ProjctService } from './projct.service';

describe('ProjctService', () => {
  let service: ProjctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
