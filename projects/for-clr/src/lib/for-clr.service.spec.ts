import { TestBed } from '@angular/core/testing';

import { ForClrService } from './for-clr.service';

describe('ForClrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForClrService = TestBed.get(ForClrService);
    expect(service).toBeTruthy();
  });
});
