import { Injectable } from '@angular/core';
import excerciseData from '../assets/dist/exercises.json';
import Exercise from 'src/models/Excercise';
import Equipment from 'src/models/Equipment';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  exercises?: Exercise[];
  constructor() {}

  // This method will return all the excercises
  getAllExcercises(): Exercise[] {
    this.exercises = excerciseData.map((data) =>
      Object.assign(new Exercise(), data)
    );
    return this.exercises;
  }

  getAllEquipments(): Equipment[] {
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
    return uniqueEquipments;
  }
}
