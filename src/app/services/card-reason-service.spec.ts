import { TestBed } from '@angular/core/testing';

import { CardReasonService } from './card-reason-service';

describe('CardReasonService', () => {
  let service: CardReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
