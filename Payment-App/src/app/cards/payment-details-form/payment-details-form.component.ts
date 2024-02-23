import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/model/paymentDetail-model';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';
// import { ToastrService } from 'ngx-toastr/public_api';
@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css'],
})
export class PaymentDetailsFormComponent {
  constructor(public service: PaymentDetailsService) {}

  onSubmit(form: NgForm): void {
    this.service.postPaymentDetail().subscribe({
      next: (res) => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        // this.toaster.success('Payment Detail Added Succesfully!', '');
      },
      error: (err) => {},
    });
  }
}
