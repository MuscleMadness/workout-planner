import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  FitnessFundamental,
  FitnessFundamentalCategory,
} from '../models/FitnessFundamental';

@Injectable({
  providedIn: 'root',
})
export class FundamentalsService {
  private fundamentalsCache: FitnessFundamental[] | null = null; // Cache for all fundamentals

  constructor(private http: HttpClient, private translate: TranslateService) {}

  // Fetch all fundamentals with caching
  getAllFundamentals(): Observable<FitnessFundamental[]> {
    if (this.fundamentalsCache) {
      // Return cached data as an observable
      return of(this.fundamentalsCache);
    }

    const lang = this.translate.currentLang || 'en'; // Default to 'en' if no language is set
    const filePath = `assets/data/${lang}/fitness_fundamentals.json`;

    return this.http.get<FitnessFundamental[]>(filePath).pipe(
      map((data) => {
        // Cache the data
        this.fundamentalsCache = data;
        return this.fundamentalsCache;
      }),
      catchError((error) => {
        console.error('Error loading fundamentals:', error);
        throw error;
      })
    );
  }

  // Group fundamentals into FitnessFundamentalCategory objects
  groupFundamentalsByCategory(
    fundamentals: FitnessFundamental[]
  ): FitnessFundamentalCategory[] {
    const fundamentalCategories: FitnessFundamentalCategory[] = [];
    fundamentals.forEach((fundamental) => {
      const { category, order } = fundamental;
      let categoryObj = fundamentalCategories.find(
        (c) => c.category === category
      );

      if (!categoryObj) {
        categoryObj = {
          order,
          category,
          fundamentals: [],
        };
        fundamentalCategories.push(categoryObj);
      }

      categoryObj.fundamentals.push(fundamental);
    });

    return fundamentalCategories;
  }
}
