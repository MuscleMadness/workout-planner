import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Exercise from '../models/Excercise';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private workoutsCache: Exercise[] | null = null; // Cache for workouts

  constructor(private http: HttpClient, private translate: TranslateService) {}

  // Load workouts from the appropriate JSON file based on language
  getAllWorkouts(): Observable<Exercise[]> {
    if (this.workoutsCache) {
      // Return cached data as an observable
      return of(this.workoutsCache);
    }

    const lang = this.translate.currentLang || 'en'; // Default to 'en' if no language is set
    const filePath = lang === 'ta' ? 'assets/data/workouts-ta.json' : 'assets/data/workouts.json';

    return this.http.get<Exercise[]>(filePath).pipe(
      map((data) => {
        this.workoutsCache = data; // Cache the data
        return this.workoutsCache;
      }),
      catchError((error) => {
        console.error('Error loading workouts:', error);
        throw error;
      })
    );
  }

  // Filter workouts based on passed IDs
  getWorkoutsByIds(ids: string[]): Observable<Exercise[]> {
    return this.getAllWorkouts().pipe(
      map((workouts) => workouts.filter((workout) => ids.includes(workout.id!)))
    );
  }
}