import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { WorkoutData } from 'src/app/providers/workout-data';
import Exercise from 'src/app/models/Excercise';
import { WorkoutPlannerEditorComponent } from '../workout-planner-editor/workout-planner-editor.component';
import {
  Equipment,
  FitnessLevel,
  FocusArea,
  Goal,
  Preference,
  WorkoutPlan,
  WorkoutPlanConfig,
} from 'src/app/models/workout-plan';
import { WorkoutPlanner } from 'src/app/providers/workout-planner';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-workout-planner',
  templateUrl: './workout-planner.page.html',
  styleUrls: ['./workout-planner.page.scss'],
})
export class WorkoutPlannerPage implements OnInit {
  workoutPlan?: WorkoutPlan;
  workoutConfig?: WorkoutPlanConfig;
  ios: boolean = false;

  constructor(
    public workoutPlanner: WorkoutPlanner,
    public workoutData: WorkoutData,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private userData: UserData
  ) {}

  ngOnInit() {
    this.workoutPlanner.getWorkoutConfig().then((config) => {
      this.workoutConfig = config;
      this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
        this.reloadWorkoutPlan();
      });
    });
  }

  reloadWorkoutPlan() {
    this.workoutPlanner
      .generateWorkoutPlan(this.workoutConfig!)
      .then((workoutPlan: WorkoutPlan) => {
        this.workoutPlan = workoutPlan;
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: WorkoutPlannerEditorComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { workoutConfig: this.workoutConfig },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.userData.clearWorkoutPlan();
      this.workoutConfig = data;

      this.workoutPlanner
        .generateWorkoutPlan(this.workoutConfig!)
        .then((workoutPlan: WorkoutPlan) => {
          this.workoutPlan = workoutPlan;
        });
    }
  }
}
