import { Component, OnInit } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { WorkoutData } from '../../providers/workout-data';
import WorkoutFilter from 'src/app/models/WorkoutFilter';

@Component({
  selector: 'app-workout-filter',
  templateUrl: './workout-filter.component.html',
  styleUrls: ['./workout-filter.component.scss'],
})
export class WorkoutFilterComponent implements OnInit {
  constructor(
    private workoutData: WorkoutData,
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  ios: boolean = false;
  workoutFilter?: WorkoutFilter;

  ngOnInit() {}

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
    this.workoutFilter = this.navParams.get('filter');
  }

  applyFilters() {
    this.dismiss(this.workoutFilter);
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  selectAll(check: boolean) {
  }
  
}
