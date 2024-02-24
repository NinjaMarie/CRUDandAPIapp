import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { PaymentDetailsFormComponent } from './cards/payment-details-form/payment-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewPaymentDetailComponent } from './pages/view-payment-detail-page/view-payment-detail/view-payment-detail.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { NotFoundComponent } from './pages/not-found-page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailsFormComponent,
    ViewPaymentDetailComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
