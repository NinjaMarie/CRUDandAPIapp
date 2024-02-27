import { IAddDetail } from './add-detail-model';

export class PaymentDetail {
  paymentId: number = 0;
  cardOwnerName: string = '';
  cardNumber: string = '';
  expirationDate: string = '';
  securityCode: string = '';
  errorMessage: string = '';
}

export interface IPaymentDetail {
  paymentId: number;
  cardOwnerName: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  errorMessage: string;
}

export interface IPaymentDetailModel {
  list: IPaymentDetail[];
  paymentObject: IPaymentDetail;
  errorMessage: string;
}
