import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessFundamentalsPageRoutingModule } from './fitness-fundamentals-routing.module';

import { FitnessFundamentalsPage } from './fitness-fundamentals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessFundamentalsPageRoutingModule
  ],
  declarations: [FitnessFundamentalsPage]
})
export class FitnessFundamentalsPageModule {}
