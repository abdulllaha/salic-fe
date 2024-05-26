import { TestBed } from '@angular/core/testing';

import { SalicService } from './salic.service';

describe('SalicService', () => {
  let service: SalicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
