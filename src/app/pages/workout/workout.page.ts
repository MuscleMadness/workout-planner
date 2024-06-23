import { Component } from '@angular/core';
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  ModalController,
  IonHeader,
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
import { EquipmentPickerComponent } from 'src/app/components/equipment-picker/equipment-picker.component';
import Equipment from 'src/models/Equipment';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonLabel,
    IonItem,
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
  equipments: Equipment[] = [];

  constructor(
    private excerciseService: ExcercisesService,
    private muscleGroupService: MuscleGroupService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.workouts = this.excerciseService.getAllExcercises();
    this.equipments = this.excerciseService.getAllEquipments();
    this.filteredWorkouts = this.workouts;
    this.muscleGroups = this.muscleGroupService.getMuscleGroups();
    console.log(this.filteredWorkouts[0]);
    this.cdr.detectChanges();
  }

  async openMusclePickerDialog() {
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
      this.filterWorkouts();
    }
  }

  async openEquipmentPickerDialog() {
    const modal = await this.modalCtrl.create({
      component: EquipmentPickerComponent,
      componentProps: {
        equipments: this.equipments,
      },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.filterWorkouts();
    }
  }

  filterWorkouts() {
    const selectedMuscleGroups = new Set<string>();

    this.selectedMuscleGroups?.forEach((muscleGroup: MuscleGroup) => {
      console.log(muscleGroup.values);
      muscleGroup.values.forEach((value) => {
        selectedMuscleGroups.add(value);
      });
    });

    // filter workouts by selected muscle groups
    this.filteredWorkouts = this.workouts.filter((workout) => {
      return selectedMuscleGroups.size === 0
        ? true
        : selectedMuscleGroups.has(workout.primaryMuscles![0]);
    });

    var selectedEquipments = (this.equipments as Equipment[])
      .filter((equipment) => equipment.selected)
      .map((equipment) => equipment.name);

    // filter workouts by selected equipments
    if (selectedEquipments.length > 0) {
      this.filteredWorkouts = this.filteredWorkouts.filter((workout) => {
        return selectedEquipments.includes(
          workout.equipment?.toLowerCase() || ''
        );
      });
    }

    this.cdr.detectChanges();
  }
}
