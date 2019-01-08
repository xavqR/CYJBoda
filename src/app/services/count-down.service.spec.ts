import { TestBed } from '@angular/core/testing';

import { CountDownService } from './count-down.service';

describe('CountDownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountDownService = TestBed.get(CountDownService);
    expect(service).toBeTruthy();
  });
});
