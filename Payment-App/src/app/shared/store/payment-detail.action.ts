import { createAction, props } from '@ngrx/store';
import { IPaymentDetail } from '../model/paymentDetail-model';
import { IAddDetail } from '../model/add-detail-model';

//LOAD STATE
export const LOAD_STATE = '[Payment Page] Load State';
export const LOAD_STATE_SUCCESS = '[Payment Page] Load State Success';
export const LOAD_STATE_FAILURE = '[Payment Page] Load State Failure';

//ADD DETAIL
export const ADD_DETAIL_STATE = '[Payment Page] Add Detail State';
export const ADD_DETAIL_STATE_SUCCESS =
  '[Payment Page] Add Detail State State Success';

//GET DETAIL
export const GET_DETAIL_STATE = '[Payment Page] Get Detail State';
export const GET_DETAIL_STATE_SUCCESS =
  '[Payment Page] Get Detail State State Success';

//LOAD STATE
export const loadState = createAction(LOAD_STATE);
export const loadStateSuccess = createAction(
  LOAD_STATE_SUCCESS,
  props<{ list: IPaymentDetail[] }>()
);
export const loadStateFailure = createAction(
  LOAD_STATE_FAILURE,
  props<{ errorMessage: string }>()
);

//ADD DETAIL
export const addDetailState = createAction(
  ADD_DETAIL_STATE,
  props<{ inputData: IPaymentDetail }>()
);
export const addDetailStateSuccess = createAction(
  ADD_DETAIL_STATE_SUCCESS,
  props<{ inputData: IPaymentDetail }>()
);

//GET DETAIL
export const getDetailState = createAction(
  GET_DETAIL_STATE,
  props<{ id: number }>()
);
export const getDetailStateSuccess = createAction(
  GET_DETAIL_STATE_SUCCESS,
  props<{ objectData: IPaymentDetail }>()
);
