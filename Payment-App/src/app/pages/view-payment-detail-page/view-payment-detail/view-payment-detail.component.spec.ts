import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentDetailComponent } from './view-payment-detail.component';

describe('ViewPaymentDetailComponent', () => {
  let component: ViewPaymentDetailComponent;
  let fixture: ComponentFixture<ViewPaymentDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentDetailComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
