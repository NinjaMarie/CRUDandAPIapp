import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDetail } from 'src/app/shared/model/paymentDetail-model';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: PaymentDetailsService, private router: Router) {}
  ngOnInit(): void {
    this.service.refreshList();
  }

  onPopulateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delet this record?'))
      this.service.deletePaymentDetail(id).subscribe({
        next: (res) => {
          this.service.list = res as PaymentDetail[];
        },
        error: (err) => {},
      });
  }

  onViewForm(): void {
    this.router.navigate(['view']);
  }
}
