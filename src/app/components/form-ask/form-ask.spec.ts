import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsk } from './form-ask';

describe('FormAsk', () => {
  let component: FormAsk;
  let fixture: ComponentFixture<FormAsk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAsk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAsk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
