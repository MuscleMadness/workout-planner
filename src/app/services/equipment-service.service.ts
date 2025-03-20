import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Equipment from '../models/Equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentServiceService {
  private thumbnailBasePath = 'assets/equipments/'; // Base path for thumbnails
  private equipmentsCache: Equipment[] | null = null; // Cache for all equipment

  constructor(private http: HttpClient, private translate: TranslateService) {}

  // Fetch all equipment with caching
  getAllEquipments(): Observable<Equipment[]> {
    if (this.equipmentsCache) {
      // Return cached data as an observable
      return of(this.equipmentsCache);
    }

    const lang = this.translate.currentLang || 'en'; // Default to 'en' if no language is set
    const filePath = `assets/data/${lang}/equipments.json`;

    return this.http.get<Equipment[]>(filePath).pipe(
      map((data) => {
        // Process and cache the data
        this.equipmentsCache = data.map((item) => {
          if (item.thumbnail) {
            item.thumbnail = this.thumbnailBasePath + item.thumbnail;
          }
          return new Equipment(item);
        });
        return this.equipmentsCache;
      }),
      catchError((error) => {
        console.error('Error loading equipments:', error);
        throw error;
      })
    );
  }

  // Fetch a single equipment by ID
  getEquipmentById(equipmentId: string): Observable<Equipment | undefined> {
    return this.getAllEquipments().pipe(
      map((equipments) => equipments.find((item) => item.id === equipmentId))
    );
  }
}