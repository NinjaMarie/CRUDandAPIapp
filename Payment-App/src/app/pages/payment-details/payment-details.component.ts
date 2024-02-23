import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: PaymentDetailsService) {}
  ngOnInit(): void {
    this.service.refreshList();
  }
}
