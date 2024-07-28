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
import { WorkoutFilterComponent } from '../workout-filter/workout-filter.component';
import { filter } from 'rxjs';
import WorkoutFilter from '../../models/WorkoutFilter';

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
  workoutGroups: WorkoutsByGroup[] = [];
  workoutFilter?: WorkoutFilter;

  constructor(
    public workoutData: WorkoutData,
    public routerOutlet: IonRouterOutlet,
    public modalCtrl: ModalController,
    public user: UserData,
    public config: Config
  ) {}

  ngOnInit() {
    this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
      this.loadFilters();
      this.updateWorkouts();  
    });
    this.ios = this.config.get('mode') === 'ios';
  }

  loadFilters() {
    this.workoutFilter = new WorkoutFilter();
    const lastFilter = localStorage.getItem('lastFilter');

    if (!lastFilter) {
      const levels = this.workoutData.getLevels();
      this.workoutFilter.levels = levels!.map((level) => ({
        name: level,
        isChecked: true,
      }));

      // localStorage.setItem('lastFilter', JSON.stringify(this.workoutFilter));
    } else {
      this.workoutFilter = JSON.parse(lastFilter);
    }
    console.log(this.workoutFilter);
  }

  updateWorkouts() {
    var selectedLevels = this.workoutFilter?.levels
      .filter((l) => l.isChecked)
      .map((l) => l.name);
    this.workoutData
      .getWorkouts(selectedLevels ?? [])
      .subscribe((data: WorkoutsByGroup[]) => {
        this.workoutGroups = data;
      });
  }

  toggleList(workoutGroup: WorkoutsByGroup) {
    workoutGroup.expanded = workoutGroup.expanded ? false : true;
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: WorkoutFilterComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { filter: this.workoutFilter },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.workoutFilter = data;
      this.updateWorkouts();
    }
  }
  async addFavorite(slidingItem: IonItemSliding, sessionData: any) {}

  async removeFavorite(
    slidingItem: IonItemSliding,
    sessionData: any,
    title: string
  ) {}
}
