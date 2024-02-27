import { createReducer, on } from '@ngrx/store';
import {
  addDetailStateSuccess,
  getDetailStateSuccess,
  loadStateFailure,
  loadStateSuccess,
} from './payment-detail.action';
import { PaymentDetailState } from './payment-detail.state';

const _PaymentReducer = createReducer(
  PaymentDetailState,
  on(loadStateSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errorMessage: '',
    };
  }),
  on(loadStateFailure, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage,
    };
  }),
  on(addDetailStateSuccess, (state, action) => {
    const _maxId = Math.max(...state.list.map((number) => number.paymentId));
    const _newData = { ...action.inputData };
    _newData.paymentId = _maxId + 1;
    return {
      ...state,
      list: [...state.list, _newData],
      errorMessage: '',
    };
  }),
  on(getDetailStateSuccess, (state, action) => {
    return {
      ...state,
      paymentObject: action.objectData,
      errorMessage: '',
    };
  })
);

export function PaymentReducer(state: any, action: any) {
  return _PaymentReducer(state, action);
}
