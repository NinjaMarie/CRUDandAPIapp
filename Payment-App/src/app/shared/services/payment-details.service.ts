import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from '../model/paymentDetail-model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        console.log(res);
        this.list = res as PaymentDetail[];
      },
      error: (err) => {},
    });
  }
}
