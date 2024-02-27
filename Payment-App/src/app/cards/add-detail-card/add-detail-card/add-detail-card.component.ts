import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAddDetail } from 'src/app/shared/model/add-detail-model';
import { IViewPaymentDetailModel } from 'src/app/shared/model/view-payment-detail-model';

@Component({
  selector: 'app-add-detail-card',
  templateUrl: './add-detail-card.component.html',
  styleUrls: ['./add-detail-card.component.css'],
})
export class AddDetailCardComponent {
  @Input() addDetailFormGroup!: FormGroup;
  @Input() data: IAddDetail | undefined;
  @Output() submitDetail: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  Reason: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  onSubmitDetail() {
    this.submitDetail.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  get emailAddress(): any {
    return this.addDetailFormGroup.get('emailAddress');
  }

  get reason() {
    return this.addDetailFormGroup.get('reason');
  }

  get contactNumber() {
    return this.addDetailFormGroup.get('contactNumber');
  }

  get name(): any {
    return this.addDetailFormGroup.get('name');
  }

  get cardNumber() {
    return this.addDetailFormGroup.get('cardNumber');
  }

  get status() {
    return this.addDetailFormGroup.get('status');
  }
}
