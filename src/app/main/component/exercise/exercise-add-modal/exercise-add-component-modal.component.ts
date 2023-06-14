import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add-component-modal.component.html',
  styleUrls: ['./exercise-add-component-modal.component.css'],
})
export class ExerciseAddComponentModal {
  constructor(public modal: NgbActiveModal) {}
}
