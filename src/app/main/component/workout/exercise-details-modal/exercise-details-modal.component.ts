import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Exercise } from '../../../../model/Workout'

@Component({
  selector: 'app-exercise-details-modal',
  templateUrl: './exercise-details-modal.component.html',
  styleUrls: ['./exercise-details-modal.component.css'],
})
export class ExerciseDetailsModalComponent {
  @Input() exercise: Exercise | undefined
  constructor(public modal: NgbActiveModal) {}
}
