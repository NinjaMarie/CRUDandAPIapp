import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { ViewPaymentDetailComponent } from './pages/view-payment-detail-page/view-payment-detail/view-payment-detail.component';
import { NotFoundComponent } from './pages/not-found-page/not-found/not-found.component';
import { AddDetailPageComponent } from './pages/add-detail-page/add-detail-page/add-detail-page.component';

const routes: Routes = [
  { path: '', component: PaymentDetailsComponent },
  { path: 'view', component: ViewPaymentDetailComponent },
  { path: 'add', component: AddDetailPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
