import { Component, OnInit } from '@angular/core';

interface MuscleGroup {
  name: string;
  image: string;
  selected: boolean;
}

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.page.html',
  styleUrls: ['./muscle-group.page.scss'],
})
export class MuscleGroupPage implements OnInit {
  muscleGroups: MuscleGroup[] = [
    { name: 'All', image: 'all.png', selected: false },
    { name: 'All Lower', image: 'all_lower.png', selected: false },
    { name: 'All Upper', image: 'all_upper.png', selected: false },
    { name: 'Abductors', image: 'abductors.png', selected: false },
    { name: 'Abs', image: 'abs.png', selected: false },
    { name: 'Adductors', image: 'adductors.png', selected: false },
    { name: 'Back', image: 'back.png', selected: false },
    { name: 'Back Lower', image: 'back_lower.png', selected: false },
    { name: 'Back Upper', image: 'back_upper.png', selected: false },
    { name: 'Biceps', image: 'biceps.png', selected: false },
    { name: 'Calfs', image: 'calfs.png', selected: false },
    { name: 'Chest', image: 'chest.png', selected: false },
    { name: 'Core', image: 'core.png', selected: false },
    { name: 'Core Lower', image: 'core_lower.png', selected: false },
    { name: 'Core Upper', image: 'core_upper.png', selected: false },
    { name: 'Forearms', image: 'forearms.png', selected: false },
    { name: 'Gluteus', image: 'gluteus.png', selected: false },
    { name: 'Hamstring', image: 'hamstring.png', selected: false },
    { name: 'Hands', image: 'hands.png', selected: false },
    { name: 'Latissimus', image: 'latissimus.png', selected: false },
    { name: 'Legs', image: 'legs.png', selected: false },
    { name: 'Neck', image: 'neck.png', selected: false },
    { name: 'Quadriceps', image: 'quadriceps.png', selected: false },
    { name: 'Shoulders', image: 'shoulders.png', selected: false },
    { name: 'Shoulders Back', image: 'shoulders_back.png', selected: false },
    { name: 'Shoulders Front', image: 'shoulders_front.png', selected: false },
    { name: 'Triceps', image: 'triceps.png', selected: false },
  ];

  constructor() {}

  ngOnInit() {}

  toggleMuscleSelection(muscle: MuscleGroup) {
    muscle.selected = !muscle.selected;
  }
}