import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuscleGroupPageRoutingModule } from './muscle-group-routing.module';

import { MuscleGroupPage } from './muscle-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuscleGroupPageRoutingModule
  ],
  declarations: [MuscleGroupPage]
})
export class MuscleGroupPageModule {}
