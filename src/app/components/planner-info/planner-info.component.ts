import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-planner-info',
  templateUrl: './planner-info.component.html',
  styleUrls: ['./planner-info.component.scss'],
})
export class PlannerInfoComponent implements OnInit {

  @Input() workoutPlan: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
