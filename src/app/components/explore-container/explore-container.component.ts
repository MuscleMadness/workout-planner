import { Component, Input } from '@angular/core';
import { WorkoutListComponent } from '../workout-list/workout-list.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [WorkoutListComponent],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
