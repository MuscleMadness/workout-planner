import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  ModalController,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../components/explore-container/explore-container.component';
import { ExcercisesService } from 'src/services/excercises.service';
import Excercise from 'src/models/Excercise';
import { WorkoutListComponent } from '../../components/workout-list/workout-list.component';
import { ChangeDetectorRef } from '@angular/core';
import Exercise from 'src/models/Excercise';
import { MuscleGroup } from 'src/models/MuscleGroup';
import { MuscleGroupService } from 'src/services/musclegroup.sevice';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog } from '@angular/material/dialog';
import { MusclePickerComponent } from 'src/app/components/muscle-picker/muscle-picker.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonicModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    WorkoutListComponent,
    MusclePickerComponent,
    MaterialModule,
  ],
})
export class Tab1Page {
  workouts: Excercise[] = [];
  muscleGroups: MuscleGroup[] = [];
  filteredWorkouts: Exercise[] = [];
  selectedMuscleGroups?: MuscleGroup[];

  constructor(
    private excerciseService: ExcercisesService,
    private muscleGroupService: MuscleGroupService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    this.filteredWorkouts = this.workouts;
    this.muscleGroups = this.muscleGroupService.getMuscleGroups();
    console.log(this.filteredWorkouts[0]);
    this.cdr.detectChanges();
  }

  // onSelectionChange(event: MatSelectChange) {
  //   const selectedMuscleGroups = event.value;
  //   console.log(selectedMuscleGroups);

  //   const uniqueMuscleGroups = new Set<string>();

  //   selectedMuscleGroups.forEach((muscleGroup: MuscleGroup) => {
  //     console.log(muscleGroup.values);
  //     muscleGroup.values.forEach((value) => {
  //       uniqueMuscleGroups.add(value);
  //     });
  //   });
  //   console.log(uniqueMuscleGroups);

  //   this.filteredWorkouts = this.workouts.filter((workout) => {
  //     return uniqueMuscleGroups.has(workout.primaryMuscles![0]);
  //   });

  //   this.cdr.detectChanges();
  // }

  async openFilterDialog() {
    const modal = await this.modalCtrl.create({
      component: MusclePickerComponent,
      componentProps: {
        selectedMuscleGroups: this.selectedMuscleGroups,
      },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.selectedMuscleGroups = data as MuscleGroup[];

      const uniqueMuscleGroups = new Set<string>();

      this.selectedMuscleGroups.forEach((muscleGroup: MuscleGroup) => {
        console.log(muscleGroup.values);
        muscleGroup.values.forEach((value) => {
          uniqueMuscleGroups.add(value);
        });
      });

      this.filteredWorkouts = this.workouts.filter((workout) => {
        return uniqueMuscleGroups.has(workout.primaryMuscles![0]);
      });

      this.cdr.detectChanges();
    }
  }
}
