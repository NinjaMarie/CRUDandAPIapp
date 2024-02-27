import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailCardComponent } from './add-detail-card.component';

describe('AddDetailCardComponent', () => {
  let component: AddDetailCardComponent;
  let fixture: ComponentFixture<AddDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetailCardComponent]
    });
    fixture = TestBed.createComponent(AddDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
