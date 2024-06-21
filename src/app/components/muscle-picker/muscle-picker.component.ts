import {
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { MuscleGroup } from 'src/models/MuscleGroup';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalController } from '@ionic/angular';
import { IonHeader } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MuscleGroupService } from 'src/services/musclegroup.sevice';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';

@Component({
  selector: 'app-muscle-picker',
  standalone: true,
  templateUrl: './muscle-picker.component.html',
  styleUrls: ['./muscle-picker.component.scss'],
  imports: [IonHeader, MaterialModule, IonicModule, FormsModule],
})
export class MusclePickerComponent implements OnInit {
  @ViewChild('chipList') chipList?: MatChipListbox;
  @Input() selectedMuscleGroups?: MuscleGroup[];

  muscleGroups?: MuscleGroup[];
  constructor(
    private modalCtrl: ModalController,
    private muscleGroupService: MuscleGroupService
  ) {}

  ngOnInit() {
    this.muscleGroups = this.muscleGroupService.getMuscleGroups();
  }

  ngOnChanges() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    var selectedChips = this.chipList?._chips.filter((chip) => chip.selected);
    var selectedMuscleGroups = selectedChips?.map((chip) => {
      return this.muscleGroups?.find((group) => group.key === chip.value);
    });
    return this.modalCtrl.dismiss(selectedMuscleGroups, 'confirm');
  }

  selectMuscle(muscleGroup: MuscleGroup) {}

  onSelectionChange(selection: MatChipSelectionChange) {
    if (selection.source.value === 'all') {
      if (selection.source.selected) {
        this.chipList?._chips.forEach((chip) => {
          chip.select();
        });
      } else {
        this.chipList?._chips.forEach((chip) => {
          chip.deselect();
        });
      }
    } else {
      if (!selection.source.selected) {
        this.chipList?._chips.forEach((chip) => {
          if (chip.value === 'all') {
            chip.deselect();
          }
        });
      } else {
        // check if all chips are selected
        let allSelected = true;
        this.chipList?._chips.forEach((chip) => {
          if (chip.value !== 'all' && !chip.selected) {
            allSelected = false;
          }
        });
        if (allSelected) {
          this.chipList?._chips.forEach((chip) => {
            if (chip.value === 'all') {
              chip.select();
            }
          });
        }
      }
    }
  }
}
