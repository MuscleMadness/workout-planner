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
  allMusclesChecked: boolean = false;
  showOnlyWorkoutsWithVideos: boolean = false;

  ngOnInit() {}

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
    this.workoutFilter = this.navParams.get('filter');
    this.showOnlyWorkoutsWithVideos = this.workoutFilter?.showOnlyWorkoutsWithVideos;
  }

  applyFilters() {
    if (this.workoutFilter) {
      this.workoutFilter.showOnlyWorkoutsWithVideos = this.showOnlyWorkoutsWithVideos;
    }
    this.dismiss(this.workoutFilter);
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  toggleAllMuscleGroups(event: any) {
    const isChecked = event.detail.checked;
    this.workoutFilter?.muscleGroups.forEach((muscleGroup: any) => {
      muscleGroup.isChecked = isChecked;
    });
  }

  toggleAllEquipments(event: any) {
    const isChecked = event.detail.checked;
    this.workoutFilter?.equipments.forEach((equipment: any) => {
      equipment.isChecked = isChecked;
    });
  }

  toggleAllLevels(event: any) {
    const isChecked = event.detail.checked;
    this.workoutFilter?.levels.forEach((level: any) => {
      level.isChecked = isChecked;
    });
  }
}
