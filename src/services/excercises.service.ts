import { Injectable } from '@angular/core';
import excerciseData from '../assets/dist/exercises.json';

@Injectable({
  providedIn: 'root',
})
export class ExcercisesService {
  constructor() {}

  // This method will return all the excercises
  getAllExcercises() {
    return JSON.parse(JSON.stringify(excerciseData));
  }
}
