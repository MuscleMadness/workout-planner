import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicSlides } from '@ionic/angular';

import { WorkoutDetailPageRoutingModule } from './workout-detail-routing.module';

import { WorkoutDetailPage } from './workout-detail.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutDetailPageRoutingModule
  ],
  declarations: [WorkoutDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkoutDetailPageModule {
  swiperModules = [IonicSlides];
}
