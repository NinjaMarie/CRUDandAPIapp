import { FormControl } from '@angular/forms';
import { IViewPaymentDetailModel } from './view-payment-detail-model';

export interface IAddDetail {
  id: number;
  name: string;
  cardNumber: string;
  emailAddress: string;
  reason: string;
  contactNumber: string;
  status: boolean;
}

export interface IAddDetailModel {
  list: [];
  addDetailObject: IAddDetail;
  errorMessage: string;
}
