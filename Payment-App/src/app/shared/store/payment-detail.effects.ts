import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PaymentDetailsService } from '../services/payment-details.service';
import {
  addDetailState,
  addDetailStateSuccess,
  getDetailState,
  getDetailStateSuccess,
  loadState,
  loadStateFailure,
  loadStateSuccess,
} from './payment-detail.action';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { IPaymentDetail } from '../model/paymentDetail-model';

@Injectable()
export class PaymentEffects {
  constructor(
    private action$: Actions,
    private service: PaymentDetailsService
  ) {}

  _loadState = createEffect(() =>
    this.action$.pipe(
      ofType(loadState),
      exhaustMap((action) => {
        return this.service.getAllPaymentDetail().pipe(
          map((data) => {
            return loadStateSuccess({ list: data });
          }),
          catchError((_error) =>
            of(loadStateFailure({ errorMessage: _error.message }))
          )
        );
      })
    )
  );

  _addDetailState = createEffect(() =>
    this.action$.pipe(
      ofType(addDetailState),
      exhaustMap((action) => {
        return this.service.create(action.inputData).pipe(
          map((data) => {
            return (
              addDetailStateSuccess({ inputData: action.inputData }),
              showAlert({ message: 'Payment Registered Successfully!' })
            );
          }),
          catchError((_error) =>
            of(
              showAlert({
                message: 'Failed to Register Payment. Please try Again.',
              })
            )
          )
        );
      })
    )
  );

  _getDetailState = createEffect(() =>
    this.action$.pipe(
      ofType(getDetailState),
      exhaustMap((action) => {
        return this.service.getPaymentDetail(action.id).pipe(
          map((data: any) => {
            return (
              getDetailStateSuccess({ objectData: data }),
              showAlert({ message: 'Payment Registered Successfully!' })
            );
          }),
          catchError((_error) =>
            of(
              showAlert({
                message: 'Failed to Fetch data. Please try Again.',
              })
            )
          )
        );
      })
    )
  );
}
function showAlert(arg0: { message: string }): any {
  alert();
}
