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

        console.log('Returning cached workout plan:', this.workoutPlan);
        console.log(this.workoutPlan.days[0].exercises[0]);
        console.log(this.workoutPlan.days[0].exercises[0].images![0]);
        console.log(this.workoutPlan.days[0].exercises[0].thumbnail);
        var images = this.workoutPlan.days[0].exercises[0].images;
        console.log(
          images && images.length > 0 ? 'assets/exercises/' + images[0] : null
        );
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: WorkoutPlannerEditorComponent,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { filter: null },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.userData.clearWorkoutPlan();
      this.workoutConfig = data;
      console.log('Creating workout plan with config', data);
      this.workoutPlanner
        .generateWorkoutPlan(this.workoutConfig!)
        .then((workoutPlan: WorkoutPlan) => {
          this.workoutPlan = workoutPlan;
        });
    }
  }
}
