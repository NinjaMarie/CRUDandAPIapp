import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IViewPaymentDetailModel } from 'src/app/shared/model/view-payment-detail-model';

@Component({
  selector: 'app-view-payment-detail-card',
  templateUrl: './view-payment-detail-card.component.html',
  styleUrls: ['./view-payment-detail-card.component.css'],
})
export class ViewPaymentDetailCardComponent {
  constructor(private router: Router) {}
  @Input() data: IViewPaymentDetailModel | undefined;
  @Output() backToPrevious: EventEmitter<void> = new EventEmitter<void>();
  @Output() addDetail: EventEmitter<void> = new EventEmitter<void>();

  onBackToPrevious(): void {
    this.backToPrevious.emit();
  }

  onAddDetail(): void {
    this.addDetail.emit();
  }
}
