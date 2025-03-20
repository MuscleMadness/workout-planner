import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import Equipment from '../../models/Equipment';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
})
export class EquipmentsPage implements OnInit {
  equipments: Equipment[] = [];
  private thumbnailBasePath = 'assets/equipments/'; // Base path for thumbnails

  constructor(private http: HttpClient, private translate: TranslateService) {}

  ngOnInit() {
    this.loadEquipments();
  }

  loadEquipments() {
    const lang = this.translate.currentLang || 'en'; // Default to 'en' if no language is set
    const filePath = `assets/data/${lang}/equipments.json`;

    this.http.get<Equipment[]>(filePath).subscribe(
      (data) => {
        this.equipments = data.map((item) => {
          // Construct the full thumbnail path
          if (item.thumbnail) {
            item.thumbnail = this.thumbnailBasePath + item.thumbnail;
          }
          return new Equipment(item);
        });
        console.log('Loaded Equipments:', this.equipments);
      },
      (error) => {
        console.error('Error loading equipments:', error);
      }
    );
  }
}