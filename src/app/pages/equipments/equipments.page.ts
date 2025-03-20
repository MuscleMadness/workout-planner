import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Equipment from '../../models/Equipment';
import { EquipmentServiceService } from '../../services/equipment-service.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
})
export class EquipmentsPage implements OnInit {
  equipments: Equipment[] = [];

  constructor(
    private equipmentService: EquipmentServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEquipments();
  }

  loadEquipments() {
    this.equipmentService.getAllEquipments().subscribe(
      (data) => {
        this.equipments = data;
        console.log('Loaded Equipments:', this.equipments);
      },
      (error) => {
        console.error('Error loading equipments:', error);
      }
    );
  }

  openDetailPage(equipmentId: string) {
    this.router.navigate(['/equipments', equipmentId]);
  }
}