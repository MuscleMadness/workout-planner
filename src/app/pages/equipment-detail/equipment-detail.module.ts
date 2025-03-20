import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentDetailPageRoutingModule } from './equipment-detail-routing.module';

import { EquipmentDetailPage } from './equipment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentDetailPageRoutingModule
  ],
  declarations: [EquipmentDetailPage]
})
export class EquipmentDetailPageModule {}
