import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentDetailCardComponent } from './view-payment-detail-card.component';

describe('ViewPaymentDetailCardComponent', () => {
  let component: ViewPaymentDetailCardComponent;
  let fixture: ComponentFixture<ViewPaymentDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentDetailCardComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
