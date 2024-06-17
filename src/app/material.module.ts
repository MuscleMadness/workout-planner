import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatListItem,
    MatChipsModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatListItem,
    MatChipsModule,
  ],
})
export class MaterialModule {}
