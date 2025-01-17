import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import Exercise from '../models/Excercise';
import { WorkoutDay, WorkoutPlan } from '../models/workout-plan';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(public storage: Storage) {
    this.initializeStorage().then(() => {
      this.initializeFavorites();
    });
  }

  async initializeStorage() {
    await this.storage.create();
  }

  async initializeFavorites() {
    this.favorites = (await this.storage.get('favourites')) || [];
  }

  hasFavorite(workoutId: string): boolean {
    return this.favorites.indexOf(workoutId) > -1;
  }

  addFavorite(workoutId: string): void {
    if (!this.hasFavorite(workoutId)) {
      this.favorites.push(workoutId);
      this.storage.set('favourites', this.favorites);
    } else {
      console.log('Workout already favorited');
    }
  }

  removeFavorite(workoutId: string): void {
    const index = this.favorites.indexOf(workoutId);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    this.storage.set('favourites', this.favorites);
  }

  async saveWorkoutPlan(workoutPlan: WorkoutPlan): Promise<boolean> {
    // Delete the excerises from the workout plan before saving it to save space
    var workoutDays = (workoutPlan as WorkoutPlan).days.map((workoutDay: WorkoutDay) => {
      return {
        ...workoutDay,
        exercises: []
      };
    });

    workoutPlan.days = workoutDays;
    console.log(JSON.stringify(workoutPlan));

    await this.storage.set('lastWorkoutPlan', workoutPlan);
    await this.storage.set('lastWorkoutPlanGeneratedDate', new Date());
    return true;
  }

  clearWorkoutPlan(): void {
    this.storage.remove('lastWorkoutPlan');
    this.storage.remove('lastWorkoutPlanGeneratedDate');
  }

  async getWorkoutPlan(): Promise<WorkoutPlan | null> {

    // if last workout plan was generated more than 7 days ago, return null
    const lastGeneratedDate = await this.storage.get('lastWorkoutPlanGeneratedDate');
    if (lastGeneratedDate) {
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - new Date(lastGeneratedDate).getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 7) {
        // clear the last workout plan
        this.storage.remove('lastWorkoutPlan');
        return null;
      }
    }
    const plan = await this.storage.get('lastWorkoutPlan');
    if (!plan) {
      return null;
    }
    console.log(JSON.stringify(plan));

    var workoutDays = (plan as WorkoutPlan).days.map((workoutDay: WorkoutDay) => {
      // var exercises = workoutDay.exercises.map((exercise : Exercise) => {
      //   return Object.assign(new Exercise(), exercise);
      // });
      // workoutDay.exercises = exercises;
      return workoutDay;
    });
    (plan as WorkoutPlan).days = workoutDays;
    return plan as WorkoutPlan | null;
  }

  login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage
      .remove(this.HAS_LOGGED_IN)
      .then(() => {
        return this.storage.remove('username');
      })
      .then(() => {
        window.dispatchEvent(new CustomEvent('user:logout'));
      });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
