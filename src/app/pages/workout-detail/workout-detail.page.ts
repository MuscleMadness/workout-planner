import { Component, HostListener, OnInit } from '@angular/core';
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
  selectedSegment: string = 'text';
  apiLoaded = false;
  screenWidth: number = 180;
  screenHeight: number = 320;

  swiperConfig = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  };

  ngOnInit() {
    this.getScreenSize();    
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight * 0.85;
    console.log('Screen width: ' + this.screenWidth);
    console.log('Screen height: ' + this.screenHeight);
  }

  ionViewWillEnter() {
    const workoutId = this.route.snapshot.paramMap.get('workoutId');
    console.log('workoutId ' + workoutId);
    if (workoutId) {
      this.workoutData.getWorkout(workoutId).subscribe((workout: Exercise) => {
        this.workout = workout;

        this.isFavorite = this.userProvider.hasFavorite(this.workout?.id!);
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
