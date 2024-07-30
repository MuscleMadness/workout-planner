import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Exercise from 'src/app/models/Excercise';
import { UserData } from 'src/app/providers/user-data';
import { WorkoutData } from 'src/app/providers/workout-data';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements OnInit {
  constructor(
    public workoutData: WorkoutData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}

  workout?: Exercise;
  isFavorite = false;
  defaultHref = '';

  swiperConfig = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
  };

  ngOnInit() {}

  ionViewWillEnter() {
    const workoutId = this.route.snapshot.paramMap.get('workoutId');
    console.log('workoutId ' + workoutId);
    if (workoutId) {
      this.workoutData.getWorkout(workoutId).subscribe((workout : Exercise) => {
        this.workout = workout;

        this.isFavorite = this.userProvider.hasFavorite(
          this.workout?.id!
        );
      });
    }
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/workouts`;
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.workout?.id!)) {
      this.userProvider.removeFavorite(this.workout?.id!);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.workout?.id!);
      this.isFavorite = true;
    }
  }

  shareWorkout() {
    console.log('Sharing Workout');
  }
}
