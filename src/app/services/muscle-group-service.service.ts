import { Injectable } from '@angular/core';
import { MuscleGroup } from '../models/MuscleGroup';

@Injectable({
  providedIn: 'root'
})
export class MuscleGroupService {
  majorGroupsBasic: { [key: string]: string[] } = {
    all: [
      'abdominals',
      'hamstrings',
      'adductors',
      'quadriceps',
      'calves',
      'glutes',
      'abductors',
      'biceps',
      'triceps',
      'forearms',
      'shoulders',
      'traps',
      'neck',
      'middle back',
      'lower back',
      'lats',
      'chest',
    ],
    core: ['abdominals'],
    legs: [
      'hamstrings',
      'adductors',
      'quadriceps',
      'calves',
      'glutes',
      'abductors',
    ],
    arms: ['biceps', 'triceps', 'forearms'],
    'upper body': ['shoulders', 'traps', 'neck'],
    back: ['middle back', 'lower back', 'lats'],
    chest: ['chest'],
  };

  muscleGroupsAdvanced: string[] = [
    'abdominals',
    'hamstrings',
    'adductors',
    'quadriceps',
    'biceps',
    'shoulders',
    'chest',
    'middle back',
    'calves',
    'glutes',
    'lower back',
    'lats',
    'triceps',
    'traps',
    'forearms',
    'neck',
    'abductors',
  ];
  constructor() {}

  // This method will return all the excercises
  getMuscleGroups() {
    const muscleGroupsBasicArray: MuscleGroup[] = [
      // {
      //   key: 'all',
      //   values: this.majorGroupsBasic['all'],
      //   name: 'All',
      //   orderNumber: 0,
      // },
      {
        key: 'core',
        values: this.majorGroupsBasic['core'],
        name: 'Core',
        orderNumber: 1,
      },
      {
        key: 'legs',
        values: this.majorGroupsBasic['legs'],
        name: 'Legs',
        orderNumber: 2,
      },
      {
        key: 'arms',
        values: this.majorGroupsBasic['arms'],
        name: 'Arms',
        orderNumber: 3,
      },
      {
        key: 'upper body',
        values: this.majorGroupsBasic['upper body'],
        name: 'Upper Body',
        orderNumber: 4,
      },
      {
        key: 'back',
        values: this.majorGroupsBasic['back'],
        name: 'Back',
        orderNumber: 5,
      },
      {
        key: 'chest',
        values: this.majorGroupsBasic['chest'],
        name: 'Chest',
        orderNumber: 6,
      },
    ];
    return muscleGroupsBasicArray;
  }
}
