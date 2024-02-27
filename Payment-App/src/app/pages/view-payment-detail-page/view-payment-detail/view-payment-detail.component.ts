import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mockViewPaymentDetailData } from 'src/app/shared/mockData/view-payment-detail-mock';
import {
  IPaymentDetail,
  PaymentDetail,
} from 'src/app/shared/model/paymentDetail-model';
import { IViewPaymentDetailModel } from 'src/app/shared/model/view-payment-detail-model';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';
import { getDetailState } from 'src/app/shared/store/payment-detail.action';
import { getPayment } from 'src/app/shared/store/payment-detail.selector';

@Component({
  selector: 'app-view-payment-detail',
  templateUrl: './view-payment-detail.component.html',
  styleUrls: ['./view-payment-detail.component.css'],
})
export class ViewPaymentDetailComponent implements OnInit {
  viewDetaildata!: IPaymentDetail;
  isViewAddDetail: boolean = false;
  // addDetailFormGroup!: FormGroup;

  constructor(
    private router: Router,
    public service: PaymentDetailsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.store.dispatch(getDetailState({id: paymentId}))
    // this.viewDetaildata = this.service.formData;
    this.createSubscription();

    // this.addDetailFormGroup;
    // this.service.getPaymentDetail(id).subscribe((data) => {
    //   this.viewDetaildata = data;
    // });
  }

  createSubscription() {
    this.store.select(getPayment).subscribe((data: IPaymentDetail) => {
      console.log('===DATA HERE===', data);
      this.viewDetaildata = data;
    });
  }

  // (this.viewDetaildata.paymentId = data.paymentId),
  //     (this.viewDetaildata.cardNumber = data.cardNumber),
  //     (this.viewDetaildata.cardOwnerName = data.cardOwnerName),
  //     (this.viewDetaildata.expirationDate = data.expirationDate),
  //     (this.viewDetaildata.securityCode = data.securityCode);

  onBackToPrevious() {
    this.router.navigate(['']);
  }

  onAddDetail() {
    this.router.navigate(['add']);
  }
}
