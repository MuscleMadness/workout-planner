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
  imports: [MaterialModule, IonicModule, FormsModule],
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

  ngAfterViewInit() {
    if (this.selectedMuscleGroups) {
      this.selectedMuscleGroups.forEach((selectedGroup) => {
        this.chipList?._chips.forEach((chip) => {
          if (chip.value.toLowerCase() === selectedGroup.key) {
            chip._setSelectedState(true, false, false);
          }
        });
      });
    }
  }

  ngOnChanges() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    var selectedChips = this.chipList?._chips.filter((chip) => chip.selected);
    var selectedMuscleGroups = selectedChips?.map((chip) => {
      return this.muscleGroups?.find(
        (group) => group.key === chip.value.toLowerCase()
      );
    });
    return this.modalCtrl.dismiss(selectedMuscleGroups, 'confirm');
  }

  selectMuscle(muscleGroup: MuscleGroup) {}

  onSelectionChange(selection: MatChipSelectionChange) {
    if (selection.source.value.toLowerCase() === 'all') {
      if (selection.source.selected) {
        this.chipList?._chips.forEach((chip) => {
          chip._setSelectedState(true, false, false);
        });
      } else {
        this.chipList?._chips.forEach((chip) => {
          chip._setSelectedState(false, false, false);
        });
      }
    } else {
      if (!selection.source.selected) {
        this.chipList?._chips.forEach((chip) => {
          if (chip.value === 'all') {
            chip._setSelectedState(false, false, false);
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
        const allChip = this.chipList?._chips.find(
          (c) => c.value.toLowerCase() === 'all'
        );
        if (allSelected) {
          allChip?._setSelectedState(true, false, false);
        } else {
          allChip?._setSelectedState(false, false, false);
        }
      }
    }
  }
}
