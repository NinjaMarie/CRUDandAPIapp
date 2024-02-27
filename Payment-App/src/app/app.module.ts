import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { PaymentDetailsFormComponent } from './cards/payment-details-form/payment-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPaymentDetailComponent } from './pages/view-payment-detail-page/view-payment-detail/view-payment-detail.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { NotFoundComponent } from './pages/not-found-page/not-found/not-found.component';
import { ViewPaymentDetailCardComponent } from './cards/view-payment-detail-card/view-payment-detail-card/view-payment-detail-card.component';
import { AddDetailCardComponent } from './cards/add-detail-card/add-detail-card/add-detail-card.component';
import { AddDetailPageComponent } from './pages/add-detail-page/add-detail-page/add-detail-page.component';
import { StoreModule } from '@ngrx/store';
import { PaymentReducer } from './shared/store/payment-detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PaymentEffects } from './shared/store/payment-detail.effects';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailsFormComponent,
    ViewPaymentDetailComponent,
    HomeComponent,
    NotFoundComponent,
    ViewPaymentDetailCardComponent,
    AddDetailCardComponent,
    AddDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ payment: PaymentReducer }),
    EffectsModule.forRoot([PaymentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
