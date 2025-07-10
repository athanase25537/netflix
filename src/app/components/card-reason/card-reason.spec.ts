import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReason } from './card-reason';

describe('CardReason', () => {
  let component: CardReason;
  let fixture: ComponentFixture<CardReason>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReason]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReason);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
