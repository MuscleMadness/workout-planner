import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FitnessFundamentalsPageRoutingModule } from './fitness-fundamentals-routing.module';

import { FitnessFundamentalsPage } from './fitness-fundamentals.page';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessFundamentalsPageRoutingModule,
    YouTubePlayerModule,
  ],
  declarations: [FitnessFundamentalsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FitnessFundamentalsPageModule {}
