import { Component, OnInit } from '@angular/core';
import { MuscleGroupService } from 'src/app/services/muscle-group-service.service';
import { MuscleGroupNew, Muscle } from 'src/app/models/MuscleGroup';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.page.html',
  styleUrls: ['./muscle-group.page.scss'],
})
export class MuscleGroupPage implements OnInit {
  muscleGroups: Muscle[] = [];
  muscleGroupData: MuscleGroupNew[] = [];

  constructor(private muscleGroupService: MuscleGroupService) {}

  ngOnInit() {
    this.loadMuscleGroups();
  }

  loadMuscleGroups() {
    this.muscleGroupService.getMuscleGroupsNew().subscribe((data: MuscleGroupNew[]) => {
      this.muscleGroupData = data.map(group => ({
        ...group,
        selected: false
      }));
      this.muscleGroups = data.flatMap(group => group.muscles.map(muscle => ({
        ...muscle,
        selected: false
      })));
    });
  }

  toggleGroupSelection(group: MuscleGroupNew) {
    group.selected = !group.selected;
    group.muscles.forEach(muscle => {
      const muscleToUpdate = this.muscleGroups.find(m => m.key === muscle.key);
      if (muscleToUpdate) {
        muscleToUpdate.selected = group.selected;
      }
    });
  }

  toggleMuscleSelection(muscle: Muscle) {
    muscle.selected = !muscle.selected;
  }
}