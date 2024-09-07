import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicSlides } from '@ionic/angular';

import { WorkoutDetailPageRoutingModule } from './workout-detail-routing.module';

import { WorkoutDetailPage } from './workout-detail.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouTubePlayerModule,
    WorkoutDetailPageRoutingModule
  ],
  declarations: [WorkoutDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkoutDetailPageModule {
  swiperModules = [IonicSlides];
}
