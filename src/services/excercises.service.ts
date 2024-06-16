import { Injectable } from '@angular/core';
import excerciseData from '../assets/dist/exercises.json';
import Exercise from 'src/models/Excercise';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  constructor() {}

  // This method will return all the excercises
  getAllExcercises(): Exercise[] {
    let exercises: Exercise[] = excerciseData.map((data) =>
      Object.assign(new Exercise(), data)
    );
    return exercises;
  }
}
