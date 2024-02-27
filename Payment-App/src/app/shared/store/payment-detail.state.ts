import { IAddDetail } from '../model/add-detail-model';
import { IPaymentDetailModel } from '../model/paymentDetail-model';

export const PaymentDetailState: IPaymentDetailModel = {
  list: [],
  paymentObject: {
    paymentId: 0,
    cardOwnerName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    errorMessage: '',
  },
  errorMessage: '',
};
