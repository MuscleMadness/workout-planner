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
  exercisesByGroup?: WorkoutsByGroup[];

  constructor(
    public http: HttpClient,
    public user: UserData,
    private muscleGroupService: MuscleGroupService
  ) {}

  load(): any {
    if (this.exercises) {
      console.log('returning data from memory');
      return of(this.exercises);
    } else {
      console.log('returning data from file');
      return this.http
        .get('assets/data/workouts.json')
        .pipe(map(this.processData, this));
      // .pipe(map(this.organizeByMajorMuscleGroup, this));
    }
  }

  organizeByMajorMuscleGroup(data: any): WorkoutsByGroup[] {
    console.log('organizing data');
    var muscleGroups = this.muscleGroupService.getMuscleGroups();

    this.exercisesByGroup = muscleGroups.map((muscleGroup) => {
      var workoutForMuscle = data.filter((exercise: Exercise) => {
        return muscleGroup.values.includes(exercise.primaryMuscles?.[0] ?? '');
      });

      var workoutByGroup = new WorkoutsByGroup(
        muscleGroup.name,
        workoutForMuscle
      );
      return workoutByGroup;
    });
    return this.exercisesByGroup;
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
    console.log('processing data');
    this.exercises = data.map((data: Exercise) => {
      data.isFavourite = this.user.hasFavorite(data.id!);
      return Object.assign(new Exercise(), data);
    });
    this.fetchEquipments();
    return this.exercises;
  }

  loadWorkOuts() {
    return this.load();
  }

  getWorkout(id: string) {
    return this.load().pipe(
      map((data: Exercise[]) => {
        return data.find((exercise) => exercise.id === id);
      })
    );
  }

  getAllWorkouts() {
    console.log('getting all workouts');
    return this.exercises!;
  }

  getWorkouts(
    muscleGroups: string[],
    equipments: string[],
    levels: string[],
    queryText: string = ''
  ): any {
    return this.load()
      .pipe(
        map((allExcercises: Exercise[]) => {
          var filteredExercises = allExcercises.filter((exercise) => {
            return (
              (levels.length == 0 ||
                (levels.includes(exercise.level ?? '') &&
                  muscleGroups.length == 0) ||
                muscleGroups.includes(exercise.primaryMuscles?.[0] ?? '')) &&
              (equipments.length == 0 ||
                equipments.includes(exercise.equipment ?? '')) &&
              (queryText == '' ||
                exercise.name!.toLowerCase().includes(queryText))
            );
          });
          return filteredExercises;
        })
      )
      .pipe(map(this.organizeByMajorMuscleGroup, this));
  }

  getLevels() {
    var levels = this.exercises?.map((exercise) => exercise.level);
    const uniqueLevels = Array.from(new Set(levels));
    return uniqueLevels as string[];
  }

  getEquipments() {
    return this.equipments;
  }

  getMuscles() {
    const primaryMuscles = this.exercises
      ?.map((exercise) => exercise.primaryMuscles)
      .reduce((acc, val) => acc!.concat(val!), []);
    const uniquePrimaryMuscles = Array.from(new Set(primaryMuscles));
    return uniquePrimaryMuscles;
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
    // uniqueEquipmentNames.unshift('all');
    const uniqueEquipments = uniqueEquipmentNames.map(
      (equipment) => new Equipment(equipment)
    );
    this.equipments = uniqueEquipments;
  }
}
