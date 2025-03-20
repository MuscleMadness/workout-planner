import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private equipmentService: EquipmentServiceService
  ) {}

  ngOnInit() {
    const equipmentId = this.route.snapshot.paramMap.get('id');
    if (equipmentId) {
      this.equipmentService.getEquipmentById(equipmentId).subscribe(
        (data) => {
          this.equipment = data;
          console.log('Loaded Equipment:', this.equipment);
        },
        (error) => {
          console.error('Error loading equipment:', error);
        }
      );
    }
  }
}