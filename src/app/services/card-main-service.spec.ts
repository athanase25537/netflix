import { TestBed } from '@angular/core/testing';

import { CardMainService } from './card-main-service';

describe('CardMainService', () => {
  let service: CardMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
