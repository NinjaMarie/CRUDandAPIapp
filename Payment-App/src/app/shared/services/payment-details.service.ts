import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IPaymentDetail, PaymentDetail } from '../model/paymentDetail-model';
import { NgForm } from '@angular/forms';
import { IAddDetail } from '../model/add-detail-model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  // data:IPaymentDetail = {}
  constructor(private http: HttpClient) {}
  formSubmit: boolean = false;

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list = res as PaymentDetail[];
      },
      error: (err) => {},
    });
  }

  getPaymentDetail(paymentId: number) {
    return this.http.get(this.url + '/' + paymentId);
  }

  getAllPaymentDetail() {
    return this.http.get<IPaymentDetail[]>(this.url);
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(
      this.url + '/' + this.formData.paymentId,
      this.formData
    );
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmit = false;
  }

  //NGRX
  updateDetail(data: IPaymentDetail) {
    return this.http.put(this.url + '/' + data.paymentId, data);
  }

  create(data: IPaymentDetail) {
    return this.http.post(this.url, data);
  }
}
