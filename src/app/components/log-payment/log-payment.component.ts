import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Payment } from 'src/app/models/gym';

@Component({
  selector: 'app-log-payment',
  templateUrl: './log-payment.component.html',
  styleUrls: ['./log-payment.component.scss'],
})
export class LogPaymentModalComponent {
  @Input() userId!: string;

  selectedDuration = { days: 30, amount: 500 };
  paymentMode: 'Cash' | 'GPay' = 'Cash';

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submit() {
    const payment: Payment = {
      userId: this.userId,
      days: this.selectedDuration.days,
      amount: this.selectedDuration.amount,
      paymentMode: this.paymentMode,
    };
    this.modalCtrl.dismiss(payment);
  }
}
