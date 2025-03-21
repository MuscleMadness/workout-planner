import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentServiceService } from '../../services/equipment-service.service';
import { WorkoutsService } from '../../services/workouts.service';
import Equipment from '../../models/Equipment';
import Exercise from '../../models/Excercise';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.page.html',
  styleUrls: ['./equipment-detail.page.scss'],
})
export class EquipmentDetailPage implements OnInit {
  equipment: Equipment | undefined;
  groupedWorkouts: { [muscleGroup: string]: Exercise[] } = {};
  selectedSegment: string = 'details';
  screenWidth: number = window.innerWidth;
  screenHeight: number = Math.min(window.innerHeight / 2, 360); // Limit height to 360px
  apiLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private equipmentService: EquipmentServiceService,
    private workoutsService: WorkoutsService
  ) {}

  ngOnInit() {
    this.getScreenSize();

    // Load YouTube iframe API if not already loaded
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    const equipmentId = this.route.snapshot.paramMap.get('id');
    if (equipmentId) {
      this.equipmentService.getEquipmentById(equipmentId).subscribe(
        (data) => {
          this.equipment = data;
          this.loadWorkouts(); // Fetch workouts after loading equipment
        },
        (error) => {
          console.error('Error loading equipment:', error);
        }
      );
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = Math.min(window.innerHeight / 2, 360); // Adjust height dynamically
  }

  loadWorkouts() {
    if (this.equipment?.exercises) {
      this.workoutsService.getWorkoutsByIds(this.equipment.exercises).subscribe(
        (data) => {
          this.groupedWorkouts = this.groupByMuscleGroup(data);
          console.log('Grouped Workouts:', this.groupedWorkouts);
        },
        (error) => {
          console.error('Error loading workouts:', error);
        }
      );
    }
  }

  groupByMuscleGroup(workouts: Exercise[]): { [muscleGroup: string]: Exercise[] } {
    return workouts.reduce((groups, workout) => {
      const muscleGroup = workout.muscleGroups;
      if (!groups[muscleGroup]) {
        groups[muscleGroup] = [];
      }
      groups[muscleGroup].push(workout);
      return groups;
    }, {} as { [muscleGroup: string]: Exercise[] });
  }
}