import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { AlertController } from '@ionic/angular';
import { PlannerInfoComponent } from 'src/app/components/planner-info/planner-info.component';

@Component({
  selector: 'app-workout-planner',
  templateUrl: './workout-planner.page.html',
  styleUrls: ['./workout-planner.page.scss'],
})
export class WorkoutPlannerPage implements OnInit {
  workoutPlan?: WorkoutPlan;
  workoutConfig?: WorkoutPlanConfig;
  ios: boolean = false;
  selectedSegment: string = 'from-coach';

  constructor(
    public workoutPlanner: WorkoutPlanner,
    public alertController: AlertController,
    public workoutData: WorkoutData,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private userData: UserData,
    private cdr: ChangeDetectorRef    
  ) {}

  ngOnInit() {
    this.workoutData.loadWorkOuts().subscribe((data: Exercise[]) => {
      this.workoutPlanner.getWorkoutConfig().then((config) => {
        this.workoutConfig = config;
        this.reloadWorkoutPlan();
      });
    });
  }

  reloadWorkoutPlan() {
    // If the url path has a query parameter with a google drive file id, then load the workout plan from the google drive file
    const urlParams = new URLSearchParams(window.location.search);
    const googleDriveFileId = urlParams.get('googleDriveFileId');   
    if (this.selectedSegment === 'custom') {
      this.loadCustomPlan();
    } else {
      this.fetchWorkoutPlanFromCoach(googleDriveFileId);
    }
  }

  loadCustomPlan() {
    this.workoutPlanner
      .generateWorkoutPlan(this.workoutConfig!)
      .then((workoutPlan: WorkoutPlan) => {
        this.workoutPlan = workoutPlan;
      });
  }

  fetchWorkoutPlanFromCoach(googleDriveFileId: string | null) {
    this.workoutPlanner.fetchWorkoutPlanFromCoach(googleDriveFileId)
    .then((data) => {
      console.log(data);
      this.workoutPlan = data;
      this.cdr.detectChanges();
    });
  }

  // Method to show the info popup
  async showCoachInfo() {
    const alert = await this.modalCtrl.create({
      component: PlannerInfoComponent,
      componentProps: { workoutPlan: this.workoutPlan },
    });
  
    await alert.present();
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
