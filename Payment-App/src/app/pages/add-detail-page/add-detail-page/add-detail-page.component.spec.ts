import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailPageComponent } from './add-detail-page.component';

describe('AddDetailPageComponent', () => {
  let component: AddDetailPageComponent;
  let fixture: ComponentFixture<AddDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetailPageComponent]
    });
    fixture = TestBed.createComponent(AddDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
