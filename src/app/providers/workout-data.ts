import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';
import Exercise from '../models/Excercise';
import Equipment from '../models/Equipment';
import WorkoutsByGroup from '../models/WorkoutsByGroup';
import { MuscleGroupService } from '../services/muscle-group-service.service';

@Injectable({
  providedIn: 'root',
})
export class WorkoutData {
  exercises?: Exercise[];
  equipments?: Equipment[];

  constructor(
    public http: HttpClient,
    public user: UserData,
    private muscleGroupService: MuscleGroupService
  ) {}

  load(): any {
    if (this.exercises) {
      return of(this.exercises);
    } else {
      return this.http
        .get('assets/data/workouts.json')
        .pipe(map(this.processData, this))
        .pipe(map(this.organizeByMajorMuscleGroup, this));
    }
  }

  organizeByMajorMuscleGroup(data: any): WorkoutsByGroup[] {
    var muscleGroups = this.muscleGroupService.getMuscleGroups();

    console.log(data[0]);
    console.log(muscleGroups[0]);

    const exercisesByGroup = muscleGroups.map((muscleGroup) => {

      var workoutForMuscle = data.filter((exercise: Exercise) => {
        // console.log(exercise.primaryMuscles);
        // console.log(muscleGroup.values);
        return muscleGroup.values.includes(exercise.primaryMuscles?.[0] ?? '');
      })
      console.log(workoutForMuscle);
      var workoutByGroup = new WorkoutsByGroup(
        muscleGroup.name,
        workoutForMuscle
      );
      return workoutByGroup;
    });
    return exercisesByGroup;
  }

  organizeByMuscleGroup(data: any): WorkoutsByGroup[] {
    const muscleGroups = [
      ...new Set(
        data
          .map((exercise: Exercise) => exercise.primaryMuscles)
          .flat()
          .filter((muscle: string): muscle is string => muscle !== undefined)
      ),
    ];
    const exercisesByGroup = muscleGroups.map((group) => {
      var workoutByGroup = new WorkoutsByGroup(
        group as string,
        data.filter((exercise: Exercise) =>
          exercise.primaryMuscles?.includes(group as string)
        )
      );
      return workoutByGroup;
    });
    return exercisesByGroup;
  }

  processData(data: any) {
    this.exercises = data.map((data: Exercise) =>
      Object.assign(new Exercise(), data)
    );
    console.log(this.exercises);
    return this.exercises;
  }

  getWorkouts() {
    return this.load().pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  fetchEquipments() {
    const uniqueEquipmentNames = [
      ...new Set(
        this.exercises
          ?.map((exercise) => exercise.equipment)
          .filter((equipment): equipment is string => equipment !== undefined)
          .map((equipment) => (equipment === null ? 'Cardio' : equipment))
      ),
    ];
    uniqueEquipmentNames.unshift('all');
    console.log(uniqueEquipmentNames);
    const uniqueEquipments = uniqueEquipmentNames.map(
      (equipment) => new Equipment(equipment)
    );
    this.equipments = uniqueEquipments;
  }
}
