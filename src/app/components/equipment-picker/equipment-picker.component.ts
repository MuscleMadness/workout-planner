import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { IonicModule } from '@ionic/angular';
import {
  MatChipListbox,
  MatChipSelectionChange,
} from '@angular/material/chips';
import { ModalController } from '@ionic/angular';
import Equipment from 'src/models/Equipment';

@Component({
  standalone: true,
  selector: 'app-equipment-picker',
  templateUrl: './equipment-picker.component.html',
  styleUrls: ['./equipment-picker.component.scss'],
  imports: [MaterialModule, IonicModule],
})
export class EquipmentPickerComponent implements OnInit {
  @ViewChild('chipList') chipList?: MatChipListbox;
  @Input() equipments?: Equipment[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.equipments?.filter((equipment) => equipment.selected));
    return this.modalCtrl.dismiss(this.equipments, 'confirm');
  }

  onSelectionChange($event: MatChipSelectionChange) {
    if ($event.source.value.toLowerCase() === 'all') {
      if ($event.source.selected) {
        this.equipments?.forEach((equipment) => (equipment.selected = true));
      } else {
        this.equipments?.forEach((equipment) => (equipment.selected = false));
      }
    } else {
      var equipment = this.equipments?.find(
        (equipment) => equipment.name === $event.source.value.toLowerCase()
      );
      equipment!.selected = $event.source.selected;
    }
  }
}
