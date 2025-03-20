import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentServiceService } from '../../services/equipment-service.service';
import Equipment from '../../models/Equipment';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.page.html',
  styleUrls: ['./equipment-detail.page.scss'],
})
export class EquipmentDetailPage implements OnInit {
  equipment: Equipment | undefined;
  selectedSegment: string = 'details';
  screenWidth: number = 180;
  screenHeight: number = 320;
  apiLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private equipmentService: EquipmentServiceService
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
          console.log('Equipment:', this.equipment);
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
    this.screenHeight = window.innerHeight * 0.85;
  }

}