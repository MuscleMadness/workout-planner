import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/providers/user-data';
import {
  AlertController,
  IonFab,
  IonItemSliding,
  IonList,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
  Config,
} from '@ionic/angular';
import Exercise from '../../models/Excercise';
import { WorkoutData } from '../../providers/workout-data';
import WorkoutsByGroup from 'src/app/models/WorkoutsByGroup';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  @ViewChild('scheduleList', { static: true }) scheduleList?: IonList;

  ios: boolean = false;
  queryText = '';
  segment = 'all';
  showSearchbar: boolean = false;
  workoutGroups: any = [];

  constructor(
    public workoutData: WorkoutData,
    public user: UserData,
    public config: Config
  ) {}

  ngOnInit() {
    this.updateWorkouts();

    this.ios = this.config.get('mode') === 'ios';
  }

  updateWorkouts() {
    this.workoutData.getWorkouts().subscribe((data: any) => {
      this.workoutGroups = data;
    });
  }

  toggleList(workoutGroup : WorkoutsByGroup) {
    workoutGroup.expanded = workoutGroup.expanded ? false : true;
  }

  async presentFilter() {}

  async addFavorite(slidingItem: IonItemSliding, sessionData: any) {}

  async removeFavorite(
    slidingItem: IonItemSliding,
    sessionData: any,
    title: string
  ) {}
}
