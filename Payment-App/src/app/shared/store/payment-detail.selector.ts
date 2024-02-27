import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IPaymentDetail,
  IPaymentDetailModel,
} from '../model/paymentDetail-model';

const getPaymentState = createFeatureSelector<IPaymentDetailModel>('payment');
// const getDetailState = createFeatureSelector<IPaymentDetail>('payment');

export const getPaymentList = createSelector(getPaymentState, (state) => {
  return state.list;
});

export const getPayment = createSelector(getPaymentState, (state) => {
  return state.paymentObject;
});
