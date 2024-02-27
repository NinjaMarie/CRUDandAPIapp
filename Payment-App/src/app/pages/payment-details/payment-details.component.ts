import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { forAdditionalDetails } from 'src/app/shared/constants/constants';
import { mockViewPaymentDetailData } from 'src/app/shared/mockData/view-payment-detail-mock';
import {
  IPaymentDetail,
  PaymentDetail,
} from 'src/app/shared/model/paymentDetail-model';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';
import {
  getDetailState,
  loadState,
} from 'src/app/shared/store/payment-detail.action';
import {
  getPayment,
  getPaymentList,
} from 'src/app/shared/store/payment-detail.selector';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  forAdd = forAdditionalDetails;
  paymentDetailList: IPaymentDetail[] | undefined;
  constructor(
    public service: PaymentDetailsService,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.service.refreshList();
    this.createSubscription();
  }

  createSubscription() {
    this.store.dispatch(loadState());
    this.store.select(getPaymentList).subscribe((data) => {
      this.paymentDetailList = data;
    });
  }

  onPopulateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delet this record?'))
      this.service.deletePaymentDetail(id).subscribe({
        next: (res) => {
          this.service.list = res as PaymentDetail[];
        },
        error: (err) => {},
      });
  }

  onViewForm(id: number): void {
    this.store.dispatch(getDetailState({ id: id }));

    // this.service.getPaymentDetail(id).subscribe((data) => {

    // })
    this.router.navigate(['view']);
  }

  onAddDetail(): void {
    this.router.navigate(['add']);
  }
}
