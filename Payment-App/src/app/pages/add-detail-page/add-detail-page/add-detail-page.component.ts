import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IAddDetail } from 'src/app/shared/model/add-detail-model';

@Component({
  selector: 'app-add-detail-page',
  templateUrl: './add-detail-page.component.html',
  styleUrls: ['./add-detail-page.component.css'],
})
export class AddDetailPageComponent implements OnInit {
  addDetailFormGroup!: FormGroup;
  addDetailData!: IAddDetail;
  Reason: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup(): void {
    this.addDetailFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      contactNumber: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  onSubmitDetail() {
    alert('Submit Clicked');
  }

  onCancel() {
    alert('Cancel Clicked');
  }
}
