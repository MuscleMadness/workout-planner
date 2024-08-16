import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import {
  Equipment,
  FitnessLevel,
  FocusArea,
  Goal,
  Preference,
  WorkoutPlanConfig,
} from 'src/app/models/workout-plan';
import { WorkoutPlanner } from 'src/app/providers/workout-planner';

@Component({
  selector: 'app-workout-planner-editor',
  templateUrl: './workout-planner-editor.component.html',
  styleUrls: ['./workout-planner-editor.component.scss'],
})
export class WorkoutPlannerEditorComponent implements OnInit {
  workoutConfig?: WorkoutPlanConfig;
  equipments: Equipment[] = [
    'barbell',
    'dumbbell',
    'cable',
    'machine',
    'body only',
    'bands',
  ];
  constructor(
    public modalCtrl: ModalController,
    private cdr: ChangeDetectorRef,
    private workoutPlanner : WorkoutPlanner,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.workoutConfig = this.workoutPlanner.defaultWorkoutConfig();
    // this.cdr.detectChanges();
  }  

  ionViewWillEnter() {
    var passedConfig = this.navParams.get('workoutConfig');
    if (passedConfig) {
      this.workoutConfig = passedConfig;
    }
  }

  applyFilters() {
    this.dismiss(this.workoutConfig);
  }

  dismiss(data?: any) {
    this.modalCtrl.dismiss(data);
  }

  toggleEquipment(equipment: Equipment) {
    if (this.workoutConfig?.equipment.includes(equipment)) {
      this.workoutConfig!.equipment = this.workoutConfig!.equipment.filter(
        (e) => e !== equipment
      );
    } else {
      this.workoutConfig!.equipment.push(equipment);
    }
  }
}
