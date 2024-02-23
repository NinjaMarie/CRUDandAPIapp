import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/services/payment-details.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css'],
})
export class PaymentDetailsFormComponent implements OnInit {
  constructor(public service: PaymentDetailsService) {}
  ngOnInit(): void {

    this.service.
  }
}
