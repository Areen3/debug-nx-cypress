import { TestBed } from '@angular/core/testing';

import { CyLibService } from './cy-lib.service';

describe('CyLibService', () => {
  let service: CyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
