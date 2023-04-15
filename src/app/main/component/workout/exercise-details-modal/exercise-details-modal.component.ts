import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-exercise-details-modal',
  templateUrl: './exercise-details-modal.component.html',
  styleUrls: ['./exercise-details-modal.component.css'],
})
export class ExerciseDetailsModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
