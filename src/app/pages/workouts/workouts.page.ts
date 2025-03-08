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
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { CATEGORY_FILTER, CATEGORY_PERSONALIZATION, TYPE_FAVORITE_TOGGLED, TYPE_FILTER_BUTTON_CLICKED, TYPE_WORKOUT_GROUP_TOGGLED } from 'src/app/models/AnalyticEvents';

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
  allExercises: Exercise[] = [];
  workoutFilter?: WorkoutFilter;
  filtersEnabled: boolean = false;
  groupNames: string[] = [];
  
  constructor(
    public workoutData: WorkoutData,
    public routerOutlet: IonRouterOutlet,
    public modalCtrl: ModalController,
    public user: UserData,
    public config: Config,
    private gaService: GoogleAnalyticsService
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

      const equipments = this.workoutData.getEquipments();
      this.workoutFilter.equipments = equipments!.map((equipment) => ({
        name: equipment.name,
        isChecked: true,
      }));

      const muscleGroups = this.workoutData.getMuscles();
      this.workoutFilter.muscleGroups = muscleGroups!.map((muscle) => ({
        name: muscle!,
        isChecked: true,
      }));
    } else {
      this.workoutFilter = JSON.parse(lastFilter);
    }
  }

  updateWorkouts() {
    var selectedMuscleGroups = this.workoutFilter?.muscleGroups
      .filter((l) => l.isChecked)
      .map((l) => l.name);

    var selectedLevels = this.workoutFilter?.levels
      .filter((l) => l.isChecked)
      .map((l) => l.name);

    var selectedEquipments = this.workoutFilter?.equipments
      .filter((l) => l.isChecked)
      .map((l) => l.name);

    this.filtersEnabled =
      selectedMuscleGroups?.length != this.workoutFilter?.muscleGroups.length ||
      selectedLevels?.length != this.workoutFilter?.levels.length ||
      selectedEquipments?.length != this.workoutFilter?.equipments.length;

    this.workoutData
      .getWorkouts(
        selectedMuscleGroups ?? [],
        selectedEquipments ?? [],
        selectedLevels ?? [],
        this.queryText.toLowerCase(),
        this.workoutFilter?.showOnlyWorkoutsWithVideos
      )
      .subscribe((data: WorkoutsByGroup[]) => {
        if (this.segment === 'favorites') {
          var favouriteWorkouts = data
            .map((workoutGroup) => {
              return {
                ...workoutGroup,
                workouts: workoutGroup.workouts!.filter((workout) =>
                  this.user.hasFavorite(workout?.id!)
                ),
              };
            })
            .filter((workoutGroup) => workoutGroup.workouts.length > 0);

          this.workoutGroups = favouriteWorkouts;
        } else {
          this.workoutGroups = data;
        }
        this.allExercises = this.workoutGroups.flatMap(
          (group) => group.workouts
        ) as Exercise[];

        this.groupNames = Array.from(
          new Set(
            this.allExercises
              .map((e) => e.muscleGroups)
              .filter((mg) => mg !== undefined)
              .map((mg) => mg!.charAt(0).toUpperCase() + mg!.slice(1).toLowerCase())
          )
        ) as string[];

        console.log(this.groupNames);
      });
  }

  toggleList(workoutGroup: WorkoutsByGroup) {
    this.gaService.trackEvent(TYPE_WORKOUT_GROUP_TOGGLED, CATEGORY_PERSONALIZATION, workoutGroup.expanded ? 'Workout Group Collapsed' : 'Workout Group Expanded');
    workoutGroup.expanded = workoutGroup.expanded ? false : true;
  }

  async presentFilter() {
    this.gaService.trackEvent(TYPE_FILTER_BUTTON_CLICKED, CATEGORY_FILTER, 'Filter Popup Opened');
    const modal = await this.modalCtrl.create({
      component: WorkoutFilterComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { filter: this.workoutFilter },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.workoutFilter = data;
      localStorage.setItem('lastFilter', JSON.stringify(this.workoutFilter));
      this.updateWorkouts();
    }
  }
  async toggleFavorite(slidingItem: IonItemSliding, exercise: Exercise) {
    this.gaService.trackEvent(TYPE_FAVORITE_TOGGLED, CATEGORY_PERSONALIZATION, exercise.isFavourite ? 'Favorite Removed' : 'Favorite Added');
    if (exercise.isFavourite) {
      console.log('removing favorite');
      this.user.removeFavorite(exercise.id!);
    } else {
      console.log('adding favorite');
      this.user.addFavorite(exercise.id!);
    }
    slidingItem.close();
  }
}
