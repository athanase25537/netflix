import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReasons } from './card-reasons';

describe('CardReasons', () => {
  let component: CardReasons;
  let fixture: ComponentFixture<CardReasons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReasons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReasons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
