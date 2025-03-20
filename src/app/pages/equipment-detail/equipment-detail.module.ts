import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentDetailPageRoutingModule } from './equipment-detail-routing.module';

import { EquipmentDetailPage } from './equipment-detail.page';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouTubePlayerModule,
    EquipmentDetailPageRoutingModule
  ],
  declarations: [EquipmentDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EquipmentDetailPageModule {}
